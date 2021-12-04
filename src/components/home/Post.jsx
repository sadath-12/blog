import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'

const usestyles=makeStyles({
    container:{
height:350,
margin:10,
borderRadius:10,
border:"1px solid #d3cede",
display:"flex",
alignItems:"center",
flexDirection:"column",
" & > *":{
    padding:"0 5px 5px 5px"
}

    },
    image:{
        height:150,
        width:"100%",
        objectFit:"cover",
        borderRadius:"10px 10px 0 0"
    },
    text:{
        color:"#878787",
        fontSize:12
    },
    detail:{
        wordBreak:"break-word"
    }
  

})

const Post = ({post}) => {
    const classes = usestyles()
    const url =post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography style={{fontWeight:700, fontSize:25,textAlign:"center"}}>{post.title}</Typography>
            <Typography className={classes.text}>Author :{post.username}</Typography>
            <Typography className={classes.detail}>{post.description}</Typography>
        </Box>
    )
}

export default Post
