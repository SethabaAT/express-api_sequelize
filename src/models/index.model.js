import dbConfig from "../config/db.config.js";
import { Sequelize,DataTypes } from "sequelize";
import ProductModel from './product.model.js';
// import ReviewModel from './review.model';

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
    
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
  });


// Authenticate
sequelize.authenticate().
then(() => {
    console.log('Connection has been established successfully.');
}).
catch(err => {
    console.error('Unable to connect to the database:', err);
});

// Export the db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.products = ProductModel(sequelize,DataTypes);
// db.reviews = ReviewModel(sequelize,DataTypes);

// Associations
db.sequelize.sync({ force: false }).
then(() => {
    console.log('Drop and re-sync db.');
});

export default db;