import grid from 'gridfs-stream';
import mongoose from 'mongoose';




let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    console.log(gfs);
    gfs.collection('fs');
});





export const uploadimage=async(request,response)=>{
    try{
        console.log(request.file)

        if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `/file/${request.file.filename}`;
    console.log(imageUrl)
   
    response.status(200).json(imageUrl);      
    }catch(err){
        console.log("cannot find")
    }
}

export const getImage = async (request, response) => {
    console.log("get Image",gfs);
    try {   
       const file = await gfs.files.findOne({ filename: request.params.filename });
      
    
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            console.log(readstream);
            readstream.pipe(res);

        
      
      
       
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}