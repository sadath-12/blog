import axios from 'axios'
import React from 'react'


export const createPost=async(post)=>{
    try{

        return await axios.post('/create',post)

    }catch(error){
console.log(error)
    }

}

export const getposts = async(param)=>{
    try{

        let response = await axios.get(`/posts/${param}`)
        return response.data
        

    }catch(err){
        console.log(err)
    }
}

export const getpostid=async(id)=>{
    try{

     let response =   await axios.get(`/post/${id}`)
     return response
    

    }catch(err){
        console.log("error while calling postid")
    }
}

export const updatepost =async(id,post)=>{
    try{
        await axios.post(`/update/${id}`,post)
    }catch(err){
        console.log(err)
        console.log("error while calling postid")
    }
}
export const deletepost =async(id)=>{
    try{
       return await axios.delete(`/delete/${id}`)
    }catch(err){
        console.log(err)
        console.log("error while deleting postid")
    }
}

// data is the image coming from back 

export const uploadfile=async(data)=>{
    try{

return await axios.post('/file/upload',data)

    }catch(err){
        console.log("error while uploading the file",err)
    }
}
