import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function convertTo12HourFormat(time : any) {
    // Create a Date object from the time string
    const date = new Date(`2000-01-01T${time}`);
  
    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Determine AM or PM
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
  
    // Add leading zero for minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Create the formatted time string
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  
    return formattedTime;
  }
  export const GetCurrentDate = () => {
    var date = new Date();
    return `${date.getFullYear()}-${((date.getMonth()) + 1) <= 9 ? '0' + ((date.getMonth()) + 1).toString() : (date.getMonth()) + 1}-${date.getDate() <= 9 ? '0' + (date.getDate()).toString() : date.getDate()}`
}
export const GetFirstDateofCurrentMonth = () => {
    var date = new Date();
    date.setDate(1);
    return `${date.getFullYear()}-${((date.getMonth()) + 1) <= 9 ? '0' + ((date.getMonth()) + 1).toString() : (date.getMonth()) + 1}-${date.getDate() <= 9 ? '0' + (date.getDate()).toString() : date.getDate()}`
};
export const GetCurrentTime = () => {
    var today = new Date()
    return today.getHours() + ":" + today.getMinutes()
}
export const GetCurrentTimeAM_PM = () => {
    var date = new Date();
    var current_hour = date.getHours() <= 12 ? date.getHours() : date.getHours() % 12;
    var am_pm = date.getHours() <= 12 ? 'AM' : 'PM'
    var current_time = (current_hour <= 9 ? '0' + current_hour : current_hour) + ':' + (date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()) + am_pm;
    return current_time
}
export const ThousandSeparater = (Num : any) => { //function to add commas to textboxes
    var x, x1, x2
    Num += '';
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}
export const ReverseDate = (Date : any) => {
    return ((((Date).split('-')).reverse()).join('-'))
}

export const Showmsg = (msg:string)=>{
    toast.configure()
    toast.info(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  }