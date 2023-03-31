import { Box, Button } from '@mui/material'
import React from 'react'

const buttonList = ["About", "Tech Stack", "Projects", "Contact" ]

export const NavigationToolbar = () => {
  return (
        <Box display="flex" boxShadow={1} gap={1} p={2} sx={{position:"fixed", top: 20, right:20, background:"white", borderRadius:2, zIndex: 10,
        }}>
           {
            buttonList.map(item => (
                <Button variant="contained" sx={{boxShadow:"none", border: "1px solid grey", backgroundColor:"#eeeeee", color:"black"}}>{item}</Button>
            ))
           } 
        </Box>
   )
}