import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FormControl, InputBase } from '@mui/material';
import { useNavigate } from 'react-router';

import { makeStyles } from '@mui/styles'
import AddCircle from '@mui/icons-material/AddCircle';
import { useParams } from 'react-router';
import { getpostid } from '../service/api';
import Posts from '../home/Posts';
import { updatepost } from '../service/api';

const usestyles = makeStyles({
    container: {
      padding: "0px 100px",
     
   },

  img: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  textfield:{
      flex:1,
      margin:"0 30px ",
      fontSize:25
  },
  textarea:{
      width:"100%",
      marginTop:50,
      border:"none",
      fontSize:18,
      "&:focus-visible":{
          outline:"none"
      }
  }
})

const initialValues={
    title:"",
    description:"",
    picture:"",
    username:"sadath",
    categories:"All",
createdDate:new Date()

}

const UpdateView = ({match}) => {
    const navigate =useNavigate()
    const {id}=useParams()
    const [posts,setposts]=useState(initialValues)
    console.log(id)

    useEffect(() => {
        const fetchdata = async()=>{
         const {data} = await getpostid(id)
         console.log(data)
         console.log(data.title)
         setposts(data)
      
        }
        fetchdata()
       
        },[])

        const HandelChange=(e)=>{
            const {name,value}=e.target
            setposts({...posts,[name]:value})
            // setpost({...post,[e.target.name]:e.target.value})
          
          }

          const updateBlog=async()=>{
            //   to find id in db to update the required and send updated data
            await updatepost(id,posts)
            navigate(`/details/${id}`)
          }

    const classes = usestyles()
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    return (
        <Box className={classes.container}>
            <img className={classes.img} src={url} alt="banner"/>

            <FormControl className={classes.form} 
            
            style={{display:"flex",flexDirection:"row",marginTop:15}} >


                <AddCircle fontSize="large" color="action" />

                <InputBase placeholder="Title" className={classes.textfield} value={posts.title} name="title"
                onChange={HandelChange}>
                   
                </InputBase>
                <Button variant="contained" onClick={updateBlog}> Update </Button>
            </FormControl>
<TextareaAutosize
minRows={5}
placeholder="Tell your Story...."
className={classes.textarea}
value={posts.description}
name="description"
onChange={HandelChange}
>

</TextareaAutosize>

        </Box>
    )
}

export default UpdateView
