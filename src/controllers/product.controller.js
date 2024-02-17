import db from "../models/index.model.js";

// Create main Model
const Product = db.products;
const Review = db.reviews;

//1. Create and Save a new Product
const addProduct = async (req, res) => {
    try {
        // Information from the request body
        const info = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            published: req.body.published ? req.body.published : false
        };
        
        // Create a Product using Sequelize
        const product = await Product.create(info);
        
        // Send a success response with the created product
        res.status(201).json(product);
    } catch (error) {
        // Handle any errors that occur during the creation process
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//2. Retrieve all Products from the database.
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            attributes: ['title', 'price'],
        });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//3. Find a single Product with an id
const getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ where: { id: id } });
        res.status(200).json(product);
    } catch (error) {
        console.error("Error retrieving product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//4. Update a Product by the id in the request
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const info ={
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            published: req.body.published ? req.body.published : false
        };

        await Product.update(info, { where: { id: id } });
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//5. Delete a Product with the specified id in the request
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.destroy({ where: { id: id } });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//6. Get Published Products
const getPublishedProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { published: true } });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error retrieving published products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Export them
export const productController = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts
}
