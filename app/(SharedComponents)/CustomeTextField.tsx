import React from 'react'
import TextField from '@mui/material/TextField';
const CustomeTextField = ({ label, type, name, value,onChange, error, helperText, disabled }: any) => {
  const toInputUppercase = (e:any) => {
    if(type === 'text') 
    e.target.value = ("" + e.target.value).toUpperCase();
}
  return (
    <TextField
      id={name}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onInput={toInputUppercase}
      variant="standard"
      error = {error}
      helperText={helperText}
      fullWidth
    />
  )
}
export default CustomeTextField