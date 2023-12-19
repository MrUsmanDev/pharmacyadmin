import axios from "axios"
const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']

export const AllDataFrom = async(TableName : string)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Company/AllDataFrom/${TableName}`
            const res = await axios.get(url) 
            return res
    }catch(err){
        return {status: false, data: []}
    }
}
export const SaveAllDef = async(TableName: string, TableID : string, Name : string)=>{
   try {
    const url = `${NEXT_PUBLIC_BASE_URL}/api/Company/SaveAllDef`
    const res = await axios.post(url, {
        TableName,
        TableID,
         Name
    })
    return res
   
   } catch (error : any) {
    return {data:{status: false, message: error.message}}
   }

}
export const GenerateIDForTable = async(TableName : string, ColName : string)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Company/GenerateIDForTable/${TableName}/${ColName}`
            const res = await axios.get(url) 
            return res
    }catch(err){
        return {status: false, data: []}
    }
}