import React from 'react'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {TextField, Button} from '@mui/material';

export interface DDOptionType {
  inputValue?: string;
  displayMember: string;
  valueMember?: number;
}
const CustomAutocomplete = ({Data, label, value, onChangeForDD, error, helperText, type, name, DisabledDataForDD} : any) => {
  const filter = createFilterOptions<DDOptionType>();
  const toInputUppercase = (e:any) => {
    e.target.value = ("" + e.target.value).toUpperCase();
}
  if(name === "SelectedProduct" ){
    Data.forEach((item:any) => {
      item.isDisabled = DisabledDataForDD.some((disabledItem:any) => disabledItem.valueMember === item.valueMember);
    });
  }
  return (
    <Autocomplete
    id="clear-on-escape"
    options={Data}
    getOptionLabel={(option : any)=> option.displayMember ? option.displayMember : ""}
    clearOnEscape
    value={value}
    onChange={onChangeForDD}
    renderInput={(params) => (
    <TextField 
    {...params} 
    label={label} 
    variant="standard" 
    onInput={toInputUppercase}
    error = {error}
    helperText={helperText} 
    />
    )}
    getOptionDisabled={(option) => option.isDisabled}
    filterOptions={(options, params) => {
      const filtered = filter(options, params);
      const { inputValue } = params;
      const isExisting = options.some((option) => inputValue === option.displayMember);
      if (inputValue !== '' && !isExisting) {
        filtered.push({
          inputValue,
          displayMember: inputValue,
          valueMember : -1
        });
      }
      return filtered;
    }}
/>

  )
}

export default CustomAutocomplete