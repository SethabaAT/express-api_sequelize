const ProductModel = (sequelize, DataTypes) => {

    // Define the Product model
    const Product = sequelize.define('product', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        published: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Product;
}

export default ProductModel;