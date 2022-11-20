import './ComboBox.module.scss'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function ComboBox(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: 250 }}
      defaultValue={props.options[0]}
      noOptionsText="Nie mamy jeszcze tam kina!"
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  )
}
