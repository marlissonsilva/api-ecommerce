import {Router} from "express";
import swaggerRouter from "../routes/swagger.js";
import ProductController from "../controllers/product.controller.js";
const router = Router();

router.get("/list", ProductController.findAllProducts);

router.post("/create", ProductController.createProduct);

router.patch("/update/:postId", ProductController.updateProduct);

router.delete("/delete/:postId", ProductController.deleteByIdProduct);

router.use("/doc", swaggerRouter)

export default router;
