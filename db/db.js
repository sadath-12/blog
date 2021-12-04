import mongoose from "mongoose";
const Connect =async()=>{
    try{
        const DB ="mongodb+srv://sadath:123123123@cluster0.cdhfw.mongodb.net/MernBlog?retryWrites=true&w=majority"
        await   mongoose.connect(DB )
        console.log("Connection success")

    }catch(err){

        console.log("cant connect")
        console.log(err)
    }
    
}
export default Connect