import express from "express";
import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct);
productRouter.get("/list", getAllProducts);
productRouter.post("/get", getProductById);
productRouter.put("/update", updateProduct);
productRouter.delete("/delete", deleteProduct);

export default productRouter;
