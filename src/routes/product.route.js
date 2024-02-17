import { productController } from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

// Create a new Product
router.post("/addProduct", productController.addProduct);

// Retrieve all Products
router.get("/allProducts", productController.getAllProducts);

// Retrieve all published Products
router.get("/published", productController.getPublishedProducts);

// Retrieve a single Product with id
router.get("/:id", productController.getOneProduct);

// Update a Product with id
router.put("/:id", productController.updateProduct);

// Delete a Product with id
router.delete("/:id", productController.deleteProduct);

export default router;
