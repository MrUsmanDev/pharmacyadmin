const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']
import axios from "axios"

export const SaveProducts = async(ProductData : FormData)=>{
    try {
        const url = `${NEXT_PUBLIC_BASE_URL}/api/Product/SaveProducts`
        const res = await axios.post(url,ProductData)
        return {message: res.data.message}
    } catch (error : any) {
        return {message: error.message}
    }
    
}
export const GetProducts = async(UserID : number)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Product/GetProducts/${UserID}`
            const res = await axios.get(url) 
            return {data: res.data.Data, status: true}
    }catch(err){
        return {status: false, data: []}
    }
}
export const GetProductsWRTID = async(ProductDetailsID : number)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Product/GetProductsWRTID/${ProductDetailsID}`
            const res = await axios.get(url) 
            return {data: res.data.Data, status: true}
    }catch(err){
        return {status: false, data: []}
    }
}
export const GetProductsWRTPID = async(ProductID : number)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Product/GetProductsWRTPID/${ProductID}`
            const res = await axios.get(url) 
            return {data: res.data.Data, status: true}
    }catch(err){
        return {status: false, data: []}
    }
}

export const GetFileFromProductLocalDirectory = async (filename : string) => {
    try {
        const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/Product/GetFileFromProductLocalDirectory`,{filename}, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data);
        return url;
      } catch (error) {
        console.log(error);
        return null;  
      }
}