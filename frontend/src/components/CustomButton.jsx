import React from 'react'
import { Button } from "@mui/joy"
import { styled } from '@mui/material'

const CustomButton = ({ title, variant, style }) => {
  return (
    <Button variant={variant} sx={style}>
        {title}
    </Button>
  )
}

export default CustomButton