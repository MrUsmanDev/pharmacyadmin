const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']
import axios from "axios"
export const SelectTotals = async(API : string)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Dashboard/${API}`
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(`Request failed with status ${res.status}`)
            }
            const responseData = await res.json()
            return {status: true, data: responseData.Data[0] || []}
    }catch(err){
        console.error(err)
        return {status: false, data: []}
    }
}
export const SelectLists = async(API: string)=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Dashboard/${API}`
            
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(`Request failed with status ${res.status}`)
            }
            const responseData = await res.json()
            return {status: true, data: responseData.Data || []}
    }catch(err){
        console.error(err)
        return {status: false, data: []}
    }
}

// export const GetFileFromLocalDirectory = async (filename: string): Promise<string | null> => {
//     const url = `${NEXT_PUBLIC_BASE_URL}/api/Registration/GetFileFromLocalDirectory`;
    
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify({ filename }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}, URL: ${url}`);
//         }

//         const blob = await response.blob();
//         const fileUrl = URL.createObjectURL(blob);
//         return fileUrl;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };
export const GetFileFromLocalDirectory = async (filename: string): Promise<string | null> => {
    try {
       
        const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/Registration/GetFileFromLocalDirectory`, { filename }, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data);
        return url;
    } catch (error) {
        console.error(error);
        return null;
    }
};