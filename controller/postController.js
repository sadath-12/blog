import post from "../schemas/postschema.js"

export const createPost=async(req,res)=>{
    const {title, categories,picture,description,  createdDate,username}=req.body
 console.log(req.body)
 try{
 const Post =await new post({title, categories,picture,description,  createdDate,username})
 console.log(Post)
 const saved =await Post.save()
 console.log(saved)
 res.status(200).json("blog saved successfully")

 }catch(error){
     res.status(500).json(error)
 }
}

export const getpost =async(req,res) =>{
    let username=req.query.username
    let category=req.query.category
    let posts;
try{
    if(username)
        posts = await post.find({username:username})
    else if(category)
        posts=await post.find({categories:category})
    else
  posts = await post.find({});
 res.status(200).json(posts)
}catch(err){
res.status(500).json(err)
}

}

export const getpostid=async(req,res)=>{
 
    try{

let postid =await post.findById(req.params.id)


res.status(200).json(postid)

    }catch(error){
        res.status(500).json(error)
    }
}

export const updatepost=async(req,res)=>{
    try{

await post.findByIdAndUpdate(req.params.id,{$set:req.body})
res.status(200).json("blog updated successfully")

    }catch(err){
res.status(500).json(err)
    }
}

export const deletepost=async(req,res)=>{
    try{
     let deleted =   await post.findById(req.params.id)
     await deleted.delete()
        res.status(200).json("post deleted succesfully")

    }catch(err){
        res.status(500).json(err)
    }
}
