const NEXT_PUBLIC_BASE_URL = process.env['NEXT_PUBLIC_BASE_URL']
import axios from "axios"


export const Login = async (Email: string, Password : string, UserType: string) => {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/AdminLogin/Login/${Email}/${Password}/${UserType}`);
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

  export const GetUsersWRTID = async (UserID: number) => {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/AdminLogin/GetUsersWRTID/${UserID}`);
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