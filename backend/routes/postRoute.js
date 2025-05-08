import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog} from "../controller/postController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


// router config
const router = express.Router();
 
// post routes
router.post("/create",authMiddleware, createBlog);
router.get("/getAllPosts", getAllBlogs);
router.get("/getSingleBlog/:id", getBlogById);
router.put("/update/:userId", updateBlog); 
router.delete("/delete/:userId", deleteBlog);

// export router
export default router;  