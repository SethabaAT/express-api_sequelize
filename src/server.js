import express from "express";
import cors from "cors";
import router from "./routes/product.route.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

// Middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", router);


// Error handling code
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went wrong...",
    });
  });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
// run the server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});