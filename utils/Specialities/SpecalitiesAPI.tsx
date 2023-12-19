const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']
import axios from "axios"
export const SaveSpecilities = async(SpecialitiesData : FormData)=>{
    try {
        const url = `${NEXT_PUBLIC_BASE_URL}/api/Specialities/SaveSpecilities`
        const res = await axios.post(url,SpecialitiesData)
        return {message: '',res}
    } catch (error : any) {
        return {message: error.message}
    }
    
}
export const SelectSpecialitiesList = async()=>{
    try{
            const url = `${NEXT_PUBLIC_BASE_URL}/api/Specialities/SelectSpecialitiesList`
            debugger
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


export const DeleteSpecialitiesList = async (SpecialitiesID: number) => {
  try {
    const response = await axios.delete(`${NEXT_PUBLIC_BASE_URL}/api/Specialities/DeleteSpecialities/${SpecialitiesID}`);
    if (response.status === 200) {
      return { status: true, data: response.data };
    } else {
      throw new Error(`Request failed  ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return { status: false, data: null };
  }
};
export const getSpecialities = async (SpecialitiesID: number) => {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/Specialities/getSpecialities/${SpecialitiesID}`);
      if (response.status === 200) {
      
        return { status: true, data: response.data};
      }  {
        throw new Error(`Request failed  ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      return { status: false, data: null };
    }
  };


