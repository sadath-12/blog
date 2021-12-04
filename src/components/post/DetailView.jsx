import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getpostid } from '../service/api'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { deletepost } from "../service/api";




const usestyles = makeStyles({
    container: {
      padding: "0px 100px",
     
   },

  img: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  
  
  icons:{
      float:"right",
     
},

icon:{
    margin:5,
    border:"1px solid #878787",
    padding:5,
    borderRadius:10
},
subhead:{
    display:"flex",
    justifyContent:"space-between",
    color:"#878787"

}



});

const DetailView = () => {
  const navigate=useNavigate()
  const {id} = useParams()
  

  const classes = usestyles();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

// here in DetailView page we have single post so we use {} whereas for multiple things we use [] inside array 
const [posts,setposts]=useState({})
useEffect(() => {
  const fetchdata = async()=>{
   const data = await getpostid(id)
   console.log(data.data)
   setposts(data.data)

  }
  fetchdata()
 
  },[]
)

const deleteblog=async()=>{
  console.log(posts._id)
  await deletepost(posts._id)
  navigate('/')
  
}



  return (
    <>
    <Box className={classes.container}>
      <img src={posts.picture || url} className={classes.img} alt="this is an img" />
      <Box className={classes.icons}>
      <NavLink to={`/update/${posts._id}`}> 
      <EditIcon className={classes.icon} color="primary"/>
      
      </NavLink>
          <DeleteIcon onClick={deleteblog} className={classes.icon} color="error" />
      </Box>
      <Typography 
       style={{fontSize:38,fontWeight:600,textAlign:"center",margin:"50px 0 10px 0"}} >
       {posts.title}</Typography>

       <Box className={classes.subhead}>
       <NavLink to={`/?username=${posts.username}`} style={{textDecoration:"none",color:"inherit"}} > 
       
           <Typography>Author: <span style={{fontWeight:600}}>{posts.username}</span></Typography>
       </NavLink>
           <Typography>{new Date(posts.createdDate).toDateString()}</Typography>
       </Box>
       <Typography >{posts.description}</Typography>
    </Box>
    </>
  );
};

export default DetailView;
