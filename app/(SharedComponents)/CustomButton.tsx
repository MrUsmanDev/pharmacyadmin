import React from 'react'
import Button from '@mui/material/Button';
const CustomButton = ({size, variant, type, disabled, innerText, onClick} : any) => {
  return (
    <Button 
     size={size} 
     variant={variant} 
     type={type} 
     disabled={disabled}
     onClick={onClick}
     >{innerText}</Button>
  )
}

export default CustomButton