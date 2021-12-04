import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router'
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FormControl, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles'
import AddCircle from '@mui/icons-material/AddCircle';
import { createPost,uploadfile } from '../service/api';




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

const CreateView = () => {
    const navigate = useNavigate()
    const classes = usestyles()
    
    const [post , setpost]=useState(initialValues)
    const [file,setfile]=useState('')


    const HandelChange=(e)=>{
        const {name,value}=e.target
        setpost({...post,[name]:value})
        // setpost({...post,[e.target.name]:e.target.value})
    
    }

    const SavePost=async()=>{
        await createPost(post)
        navigate('/')
    }

useEffect(()=>{
    const getImage = async () => { 
        console.log(file)
        if(file) {
            const data = new FormData();
            data.append("name", file.name);
            console.log(file.name)
            data.append("file", file);
            
            const image = await uploadfile(data);
            console.log(image)
            
        }
    }
    getImage();

}
,[file])

    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    return (
        <Box className={classes.container}>
            <img className={classes.img} src={url} alt="banner"/>

            <FormControl className={classes.form} 
            
            style={{display:"flex",flexDirection:"row",marginTop:15}} >

<label htmlFor="fileinput">

                <AddCircle fontSize="large" color="action" />
 </label>

                <input type="file" id="fileinput" style={{display:"none"}}
onChange={(e)=>setfile(e.target.files[0])}

                />

                <InputBase placeholder="Title" className={classes.textfield}
                name="title"
                    onChange={(e)=>{HandelChange(e)}}
                />
                <Button variant="contained" onClick={()=>SavePost()}> Publish</Button>
            </FormControl>
<TextareaAutosize
minRows={5}
placeholder="Tell your Story...."
className={classes.textarea}
name="description"
onChange={(e)=>{HandelChange(e)}}
>

</TextareaAutosize>

        </Box>
    )
}

export default CreateView
