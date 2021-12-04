import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const usestyles = makeStyles({
image:{
    background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) repeat-x center/55% #000`,
    width:"100%",
    height:"50vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    
        '& :last-child':{
            fontSize:20,
            color:"black",
            background:"white"

        },
        '& :first-child':{
            fontSize:70,
            color:"white",
            lineHeight:1
        }


}
})

const Banner = () => {

    const classes = usestyles()

    
    return (
      
        <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>Code for interview</Typography>
          
        </Box>
    )
}

export default Banner
