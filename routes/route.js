import express from 'express'
const router = express.Router()
import {createPost,getpost} from '../controller/postController.js'
import {getpostid,updatepost} from '../controller/postController.js'
import {deletepost} from '../controller/postController.js'
import upload from '../utils/upload.js'
import {uploadimage,getImage} from '../controller/imagecontro.js'




router.post('/create',createPost)
router.get('/posts',getpost)
router.get('/post/:id',getpostid)
router.post('/update/:id',updatepost)
router.delete('/delete/:id',deletepost)
router.post('/file/upload',upload.single('file'),uploadimage)
router.get('/file/:filename',getImage)







export default router