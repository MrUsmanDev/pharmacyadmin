import axios from "axios"
const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']

export const GetProfileData = async(UserID : Number)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Profile/GetProfileData/${UserID}`
            const res = await axios.get(url) 
            return res
    }catch(err){
        return {status: false, data: []}
    }
}

export const GetBusinesHrs = async(UserID : Number)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Profile/GetBusinesHrs/${UserID}`
            const res = await axios.get(url) 
            return res
    }catch(err){
        return {status: false, data: []}
    }
}

export const UpdateProfile = async(UserObj : any, BussinessHrsObj: any)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Profile/UpdateProfile`
            const res = await axios.post(url, {UserObj, BussinessHrsObj}) 
            return res.data.message
    }catch(err){
        return {status: false, data: []}
    }
}