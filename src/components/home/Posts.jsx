import { NavLink,useLocation } from 'react-router-dom'
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'

import { getposts } from '../service/api'

const Posts = () => {
    const [posts,setposts]=useState([])
    const {search}=useLocation()

    useEffect(()=>{
const fetchdata = async()=>{
    const data =await getposts(search);
    console.log(data)
    setposts(data)
}

fetchdata()
    },[search])

    // let Posts =[1,2,3,4,5,6,7,8,9]
    return (
        <>
        {posts.map((post)=>{
            return(
                <>
                <Grid lg={3} sm={4} xs={12}>
                <NavLink to={`/details/${post._id}`} style={{textDecoration:"none",color:"inherit"}}> 
                    <Post post={post}/>
                </NavLink>
                </Grid>
                </>
            )
        })}
        </>
    )
      
       
}

export default Posts

