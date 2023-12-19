import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const CustomSwitch = ({label, name, value, onChange} : any) => {
  return (
    <FormControlLabel 
       control={
       <Switch
       name={name}
       checked={value}
       onChange={onChange}
       />
    } 
    label={label}
    sx={{mt: 3}}
    />
  )
}

export default CustomSwitch