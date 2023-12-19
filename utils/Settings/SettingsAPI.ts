import axios from "axios"
const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']

export const ChangePassword = async(ChangePasswordObj : any)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Settings/ChangePassword`
            const res = await axios.post(url, {ChangePasswordObj}) 
            return res
    }catch(err){
        return {status: false, data: []}
    }
}

