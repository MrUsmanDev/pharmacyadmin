"use client"
import React, { useState } from 'react'
import MUIDataTable,{SelectableRows} from "mui-datatables";
import Edit from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { GetProducts } from '@/utils/Product/ProductAPI';
const ProductList = () => {
const [ProductData, setProductData] = useState<any>([])
const session : any = useSession()

const UserID = session.data?.user[0]?.UserID
  React.useEffect(()=>{
    fetchData()
  },[UserID])
      const fetchData = async()=>{  
        if(UserID){
          const res = await GetProducts(UserID)
          if(res.status){
            setProductData(res.data)
          }
        }
      }
    const columns = [
     
        {
         name: "ProductName",
         label: "Product Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "CompanyName",
         label: "Company",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "SaleRate",
         label: "Sale Rate",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "PurchaseRate",
         label: "Purchase Rate",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: "Categories",
          label: "Categories",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "StockQty",
          label: "Stock Qty",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "action",
          label: "action",
          options: {
           filter: true,
           sort: true,
           customHeadLabelRender: (columnMeta : any)=>{
            return(
              <div style={{fontSize: "15px", fontWeight:"Bold" , textAlign: "right"}} >{columnMeta.label}</div>
            )
           },
           customBodyRender: (dataIndex:any, rowIndex:any) => {
             
             var ProductDetailsID = ProductData
             if (ProductDetailsID[rowIndex.rowIndex] != null)
               return (
                 <Link href={`/Products/${ProductData[rowIndex.rowIndex]?.ProductDetailsID}`}> <Edit /></Link>
               );
           }
          }
         }
       ];
       const options ={
        
        print: false,
        search: true,
        download: true,
        viewColumns: true,
        filter: false,
      };
  return (
    <div className="page-wrapper">
        <div className="content container-fluid">
              <div className='row justify-content-end'>
                <div className='col-md-10'></div>
                <div className='col-md-2'>
                  <Link href={'/Products/0'}>
                <Button variant='contained' className='m-2'>Add New</Button>
                </Link>
                </div>
               
              </div>
              <MUIDataTable
                  title={"Product List"}
                  data={ProductData}
                  columns={columns}
                  options={options}
                />
        </div>
    </div>
  )
}

export default ProductList