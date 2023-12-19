"use client"
import React, { Suspense, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CustomAutocomplete, { DDOptionType } from '@/app/(SharedComponents)/CustomAutocomplete';
import CustomSwitch from '@/app/(SharedComponents)/CustomSwitch';
import CustomeTextField from '@/app/(SharedComponents)/CustomeTextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSession } from 'next-auth/react';
import CustomButton from '@/app/(SharedComponents)/CustomButton';
import { GetCurrentDate, Showmsg } from '@/utils/common';
import { AllDataFrom, SaveAllDef } from '@/utils/Company/CompanyAPI';
import { useRouter } from 'next/navigation';
import { GetFileFromProductLocalDirectory, GetProductsWRTID, SaveProducts, GetProducts, GetProductsWRTPID } from '@/utils/Product/ProductAPI';


const ProductEntryPage = ({ ProductDetailsID }: any) => {
    const [btnDisabled, setbtnDisabled] = useState(false)
    const [CompanyList, setCompanyList] = useState([])
    const [CategoriesList, setCategoriesList] = useState([])
    const [ProductList, setProductList] = useState([])
    const [AlreadyUsedData, setAlreadyUsedData] = useState([])
    const [imgSrc, setimgSrc] = useState('https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png')
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter()
    const session : any = useSession()
    const UserID = session.data?.user[0]?.UserID

    const initialValues = {
        ProductDetailsID: parseInt(ProductDetailsID),
        SelectedProduct: '',
        Farmulation: '',
        SelectedCompany: null,
        IsPack: false,
        PackQty: 0,
        PackSaleRate: 0,
        PackPurchaseRate: 0,
        PurchaseRatePer: 15,
        PurchaseRate: 0,
        SaleRate: 0,
        MinStockLevel: 0,
        MaxStockLevel: 0,
        SelectedCategories: null,
        CreatedDate: GetCurrentDate(),
        IsActive: true,
        StockQty : 0,
        UserID: UserID
    }
    React.useEffect(()=>{
        fetchDD()
        AlreadyUsed_Products()
        if(parseInt(ProductDetailsID) >= 1){ // Edit case
            EditRecord(ProductDetailsID, true,0)
        }
    },[UserID])
    const EditRecord = async (ProductDetailsID : any, Editdirection: boolean,ProductID:number) => {
        let res
        if(Editdirection){
            res = await GetProductsWRTID(parseInt(ProductDetailsID));
        }else{
            res = await GetProductsWRTPID(ProductID)
        }
        if (res!.status) {
          const mData = res!.data;
          if(mData.length > 0){
            mData[0].ProductPic = await GetFileFromProductLocalDirectory( mData[0].ProductPic)
            // Define an array of field names to update
            const fieldsToUpdate = [
              "Farmulation",
              "IsPack",
              "PackQty",
              "PackSaleRate",
              "PackPurchaseRate",
              "PurchaseRatePer",
              "SaleRate",
              "PurchaseRate",
              "MinStockLevel",
              "MaxStockLevel",
              "CreatedDate",
              "StockQty",
              "IsActive",
            ];
            setimgSrc(mData[0].ProductPic)
            // Update each field using the loop
            fieldsToUpdate.forEach((fieldName) => {
              formik.setFieldValue(fieldName, mData[0][fieldName]);
            });
            // Define an array of data sources and their corresponding field names
            const dataSources = [
              { source: "pharmacyproducts", field: "SelectedProduct", id: mData[0].ProductID },
              { source: "pharmacycompany", field: "SelectedCompany", id: mData[0].CompanyID },
              { source: "pharmacycategories", field: "SelectedCategories", id: mData[0].CategoriesID },
            ];
            // Update fields based on data sources and IDs
            dataSources.forEach(async ({ source, field, id }) => {
              const res = await AllDataFrom(source);
              const renamedData = commonFun(res);
              const selectedData = renamedData.find((x:any) => x.valueMember === id);
              if (selectedData) {
                formik.setFieldValue(field, selectedData);
              }
            });
          }else{
            const { SelectedProduct, ...rest } = initialValues;
            const resetValues  = rest
            formik.setValues((prevValues) => ({
                ...prevValues,
                ...resetValues,
              }));
            setimgSrc('https://www.spict.org.uk/wp-content/uploads/2019/04/placeholder.png')
          }
        }
      };
    const commonFun = (res : any) =>{
        if(res.status){
            const mData = res.data.Data
            const renamedData = mData.map((val: any) => ({
                displayMember: val.CompanyName || val.Categories || val.ProductName,
                valueMember: val.CompanyID || val.CategoriesID || val.ProductID 
              }));
            return renamedData
         }
    }
    const fetchDD = async()=>{
        setbtnDisabled(true)
        const res = await AllDataFrom("pharmacycompany")
        setbtnDisabled(false)
        const renamedData = commonFun(res)
        setCompanyList(renamedData)
        const res1 = await AllDataFrom("pharmacycategories")
        const renamedData1 = commonFun(res1)
        setCategoriesList(renamedData1)
        const res2 = await AllDataFrom("pharmacyproducts")
        const renamedData2 = commonFun(res2)
        setProductList(renamedData2)
    }
    const AlreadyUsed_Products = async()=>{  
        if(UserID){
          const res = await GetProducts(UserID)
          if(res.status){
            const renamedData = res.data.map((val: any) => ({
                displayMember: val.ProductName,
                valueMember: val.ProductID 
              }));
          setAlreadyUsedData(renamedData)
          }
        }
      }
    const saveHandler = async(ProductData : FormData)=>{
        setbtnDisabled(true)
        const res = await  SaveProducts(ProductData)
        setbtnDisabled(false)
        Showmsg(res.message)
    }
    const backHandler = () =>{
        router.push('/Products')
    }
    const RowsProps = [
        {
            className: 'p-3',
            items: [
                { control: 'CustomAutocomplete',  label: 'Product', name: 'SelectedProduct', isValidate: true, xs: 12, sm: 4, md: 4, lg: 4, xl: 4, Data:ProductList, isDisabledBasedOnPack: false  },
                // { control: 'CustomeTextField', type: 'text', label: 'Product ID', name: 'ProductID', isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, Data:[], isDisabledBasedOnPack: false  },
                { control: 'CustomeTextField', type: 'text', label: 'Farmulation', name: 'Farmulation', isValidate: false, xs: 12, sm: 4, md: 4, lg: 4, xl: 4, Data:[], isDisabledBasedOnPack: false  },
                { control: 'CustomAutocomplete', label: 'Company', name: 'SelectedCompany', Data: CompanyList, isValidate: true, xs: 12, sm: 4, md: 4, lg: 4, xl: 4 , isDisabledBasedOnPack: false },
            ],
        },
        {
            className: 'pl-3 pr-3',
            items: [
                { control: 'CustomSwitch', label: "Is Pack", name: "IsPack", isValidate: false, xs: 12, sm: 4, md: 1, lg: 1, xl: 1, isCheacked: false , Data:[], isDisabledBasedOnPack: false},
                { control: 'CustomeTextField', type: 'number', label: "Pack Qty", name: "PackQty", isValidate: false, xs: 12, sm: 4, md: 1, lg: 1, xl: 1, isDisabledBasedOnPack: true, Data:[] },
                { control: 'CustomeTextField', type: 'number', label: "Pack Sale Rate", name: "PackSaleRate", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, isDisabledBasedOnPack: true, Data:[] },
                { control: 'CustomeTextField', type: 'number', label: "Pack Purchase Rate", name: "PackPurchaseRate", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2 , Data:[], isDisabledBasedOnPack: false },
                { control: 'CustomeTextField', type: 'number', label: "Purchase Rate %", name: "PurchaseRatePer", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, Data:[] , isDisabledBasedOnPack: false },
                { control: 'CustomeTextField', type: 'number', label: "Sale Rate", name: "SaleRate", isValidate: true, xs: 12, sm: 4, md: 2, lg: 2, xl: 2 , Data:[], isDisabledBasedOnPack: false },
                { control: 'CustomeTextField', type: 'number', label: "Purchase Rate", name: "PurchaseRate", isValidate: true, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, Data:[] , isDisabledBasedOnPack: false },
            ],
        },
        {
            className: 'pl-3 pr-3',
            items: [
                { control: 'CustomeTextField', type: 'number', label: "Min Stock Level", name: "MinStockLevel", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, Data:[], isDisabledBasedOnPack: false  },
                { control: 'CustomeTextField', type: 'number', label: "Max Stock Level", name: "MaxStockLevel", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2 , Data:[], isDisabledBasedOnPack: false },
                { control: 'CustomAutocomplete', label: "Categories", name: 'SelectedCategories', Data: CategoriesList, isValidate: true, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, isDisabledBasedOnPack: false  },
                { control: 'CustomeTextField', type: 'date', label: "Created Date", isValidate: false, name: "CreatedDate", xs: 12, sm: 4, md: 2, lg: 2, xl: 2 , Data:[], isDisabledBasedOnPack: false },
                { control: 'CustomeTextField', type: 'number', label: "Available Stock", name: "StockQty", isValidate: true, xs: 12, sm: 4, md: 2, lg: 2, xl: 2, Data:[] , isDisabledBasedOnPack: false },
                { control: 'CustomSwitch', label: "Is Active", name: "IsActive", isValidate: false, xs: 12, sm: 4, md: 2, lg: 2, xl: 2 , isCheacked: true, Data:[], isDisabledBasedOnPack: false },
            ],
        },
    ];
    const ButtonsProps = [
        { control: 'CustomButton', type: 'submit', innerText: 'Save', variant: 'contained', size: "large", onClick:{saveHandler} },
        { control: 'CustomButton', type: 'button', innerText: 'Back', variant: 'contained', size: "large", onClick:{backHandler} }

    ]
    const ComponentMap: any = {
        CustomeTextField: CustomeTextField,
        CustomAutocomplete: CustomAutocomplete,
        CustomSwitch: CustomSwitch,
        CustomButton: CustomButton
    };
    const validationSchema = yup.object({
        SelectedProduct:  yup.object().shape({
            displayMember: yup.string().required('Product is required'),
            valueMember: yup.string().required('Product is required')
        }),
        SelectedCompany: yup.object().shape({
            displayMember: yup.string().required('Company is required'),
            valueMember: yup.string().required('Company is required')
        }),
        SaleRate: yup.number().moreThan(0, 'Sale rate is required'),
        PurchaseRate: yup.number().moreThan(0, 'Purchase rate is required'),
        SelectedCategories: yup.object().shape({
            displayMember: yup.string().required('Category is required'),
            valueMember: yup.string().required('Category is required')
        })
    });
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const formdata = new FormData
            formdata.append("ProductData", JSON.stringify(values))
            if(file)
            formdata.append("ProductPic", file)
            saveHandler(formdata)
            resetForm()
            router.push('/Products')
        },
    });
    const SaveDefinations = async (TableName: string, TableID: string, Name: string) =>{
        const res = await SaveAllDef(TableName, TableID, Name)
        Showmsg(res.data.message)
        return res.data.ID
    }  
    const renderTooltip = (props : any) => {
        return(
      <Tooltip id="button-tooltip" {...props}>
        Upload Product Pic
      </Tooltip>
        )
    };
   const change_Image = (e: React.ChangeEvent<HTMLInputElement>) => {
        var img = document.getElementById('img') as HTMLImageElement
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
          var reader = new FileReader();
          reader.onload = function (e:ProgressEvent<FileReader>) {
            img.src = e.target?.result as string;
          }
          reader.readAsDataURL(e.target.files[0]);
        }
      }
    return (
        <Suspense fallback={<p>Loading Page...</p>}>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <Typography sx={{ fontSize: 24 }}  >
                        {parseInt(ProductDetailsID) === 0 ? 'Add' : 'Edit'} Products
                    </Typography>
            <Card sx={{ minWidth: 275 }}>
                <form onSubmit={formik.handleSubmit}>
                            <CardContent>
                                {
                                    RowsProps.map((row, rowIndex) => (
                                        <Row key={rowIndex} className={row.className}>
                                            {row.items.map((val, colIndex: any) => {
                                                const ComponentToRender = ComponentMap[val.control];
                                                return (
                                                    <Col key={colIndex} xs={val.xs} sm={val.sm} md={val.md} lg={val.lg} xl={val.xl}>
                                                        <ComponentToRender
                                                            type={val.type}
                                                            name={val.name}
                                                            label={val.label}
                                                            Data={val.Data}
                                                            DisabledDataForDD = {AlreadyUsedData}
                                                            disabled={val.isDisabledBasedOnPack && !formik.values["IsPack"]}
                                                            value={formik.values[val.name as keyof typeof formik.values]}
                                                            onChange={(e: any) => {
                                                                formik.handleChange(e)
                                                                if (e.currentTarget.name === "PackQty") {
                                                                    var mRate = formik.values["PackSaleRate"]
                                                                    var mQty = parseFloat(e.target.value)
                                                                    var mSaleRate = mRate / mQty
                                                                    var mPackPurRate = parseFloat((mRate - mRate * (formik.values["PurchaseRatePer"] / 100)).toFixed(2))
                                                                    var PurRate = parseFloat((mPackPurRate / mQty).toFixed(2))
                                                                    formik.setFieldValue("SaleRate", mSaleRate.toString())
                                                                    formik.setFieldValue("PackPurchaseRate", mPackPurRate.toString())
                                                                    formik.setFieldValue("PurchaseRate", PurRate)
                                                                } else if (e.currentTarget.name === "PackSaleRate") {
                                                                    var mRate = parseFloat(e.target.value)
                                                                    var mQty = formik.values["PackQty"]
                                                                    var mSaleRate = mRate / mQty
                                                                    var mPackPurRate = parseFloat((mRate - mRate * (formik.values["PurchaseRatePer"] / 100)).toFixed(2))
                                                                    var PurRate = parseFloat((mPackPurRate / mQty).toFixed(2))
                                                                    formik.setFieldValue("SaleRate", mSaleRate.toString())
                                                                    formik.setFieldValue("PackPurchaseRate", mPackPurRate.toString())
                                                                    formik.setFieldValue("PurchaseRate", PurRate)
                                                                } else if (e.currentTarget.name === "PurchaseRatePer") {
                                                                    if (formik.values["IsPack"]) {
                                                                        var mRate = formik.values["PackSaleRate"]
                                                                        var mQty = formik.values["PackQty"]
                                                                        var mSaleRate = mRate / mQty
                                                                        var mPackPurRate = parseFloat((mRate - mRate * (parseFloat(e.target.value) / 100)).toFixed(2))
                                                                        var PurRate = parseFloat((mPackPurRate / mQty).toFixed(2))
                                                                        formik.setFieldValue("SaleRate", mSaleRate.toString())
                                                                        formik.setFieldValue("PackPurchaseRate", mPackPurRate.toString())
                                                                        formik.setFieldValue("PurchaseRate", PurRate)
                                                                    } else {
                                                                        var mSaleRate = formik.values["SaleRate"]
                                                                        var mPurRate = parseFloat((mSaleRate - (mSaleRate * (parseFloat(e.target.value) / 100))).toFixed(2))
                                                                        formik.setFieldValue("SaleRate", mSaleRate.toString())
                                                                        formik.setFieldValue("PurchaseRate", mPurRate)
                                                                    }
                                                                } else if (e.currentTarget.name === "SaleRate") {
                                                                    const _SaleRate = parseFloat(e.target.value)
                                                                    const _PurVal = parseFloat((_SaleRate - (_SaleRate * (formik.values["PurchaseRatePer"] / 100))).toFixed(2))
                                                                    formik.setFieldValue("PurchaseRate", _PurVal)
                                                                }
                                                            }}
                                                            onChangeForDD={async (_: React.SyntheticEvent, newValue: DDOptionType) => {
                                                                let ID: any
                                                                if (newValue && newValue.valueMember === -1) {
                                                                    // i return id here beacuse i set new record to -1 as valueMember but when we 
                                                                    // save data we need id in which actual record is save so while saving i return ID
                                                                    // and pass this ID to value Member
                                                                    if (val.name === "SelectedProduct") {
                                                                        ID = await SaveDefinations("pharmacyproducts", "ProductID", newValue.displayMember)
                                                                        newValue.valueMember = ID
                                                                    } else if (val.name === "SelectedCompany") {
                                                                        ID = await SaveDefinations("pharmacycompany", "CompanyID", newValue.displayMember)
                                                                        newValue.valueMember = ID
                                                                    } else if (val.name === "SelectedCategories") {
                                                                        ID = await SaveDefinations("pharmacycategories", "CategoriesID", newValue.displayMember)
                                                                        newValue.valueMember = ID
                                                                    }
                                                                    fetchDD()
                                                                }else {
                                                                    if(val.name === "SelectedProduct"){
                                                                        if(newValue && newValue.valueMember)
                                                                        EditRecord(0,false,newValue?.valueMember)
                                                                    }
                                                                }
                                                                formik.setFieldValue(val.name, newValue)
                                                            }
                                                            }
                                                            onBlur={formik.handleBlur}
                                                            error={val.isValidate && formik.touched[val.name as keyof typeof formik.values] && Boolean(formik.errors[val.name as keyof typeof formik.values])}
                                                            helperText={val.isValidate && formik.touched[val.name as keyof typeof formik.values] && formik.errors[val.name as keyof typeof formik.values]}

                                                        />
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    ))
                                }
                                <Row>
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                              >
                                <img 
                                 src={imgSrc} 
                                 id="img" 
                                 style={{ cursor: 'pointer', marginTop: '3%', width: '25%', height: '150px' }} 
                                 onClick={(e) => {
                                    document.getElementById("img_file")?.click()
                                }}
                                className="p-3"
                                alt="profile-image"
                                />
                            </OverlayTrigger>
                            <input type="file" name="img_file" id="img_file" hidden={true} onChange={(e : React.ChangeEvent<HTMLInputElement>)=>change_Image(e)} />
                                </Row>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'end' }}>
                                {
                                    ButtonsProps.map((val: any) => {
                                        const ComponentToRender = ComponentMap[val.control];
                                        return (
                                            <ComponentToRender
                                                size={val.size}
                                                variant={val.variant}
                                                type={val.type}
                                                disabled={btnDisabled}
                                                innerText={val.innerText}
                                                onClick={val.innerText === 'Back' && backHandler}
                                            />
                                        )
                                    })
                                }

                            </CardActions>
                </form>
                    </Card>
                </div>
            </div>
        </Suspense>
    )
}
export default ProductEntryPage 