import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.module.scss'

export default function DataPicker() {
  const [value, setValue] = useState(Dayjs)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        inputFormat="DD.MM.YYYY"
        label="Wybierz dzień..."
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
        InputProps={{
          sx: {
            height: 45,
          },
        }}
      />
    </LocalizationProvider>
  )
}
