import { Request, Response, NextFunction } from 'express'
import axios from 'axios';
interface Post {
    userId: Number,
    id: Number,
    title: String,
    body: String
}
const getPosts = async (req: Request, res: Response) => {
    try {
        let result = await axios.get(`${process.env.API_URL}`)
        let posts: [Post] = result.data;
        return res.status(200).json({ message: posts });
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Error : " + err });
    }
}
const getPostsById = async (req: Request, res: Response) => {
    try {
        let id: string = req.params.id;
        let result = await axios.get(`${process.env.API_URL}${id}`)
        let posts: [Post] = result.data;
        return res.status(200).json({ message: posts });
    }
    catch (err) {
        return res.status(400).json({ message: "Some error" });
    }
}
export { getPosts, getPostsById };