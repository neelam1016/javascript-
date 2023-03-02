import express from 'express';
import {getPosts,getPostsById} from '../controller/postController'
const router=express.Router();
router.get("/posts",getPosts)
router.get("/postbyid/:id",getPostsById)
export default router;