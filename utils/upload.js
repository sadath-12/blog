
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
// but upload is working properly
const storage = new GridFsStorage({
    url: `mongodb+srv://sadath:123123123@cluster0.cdhfw.mongodb.net/MernBlog?retryWrites=true&w=majority`,
    // url: 'mongodb://localhost:27017/image-upload',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;
            // response.status(400).json("this is error")

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        
        }
    }
});

export default multer({storage}); 