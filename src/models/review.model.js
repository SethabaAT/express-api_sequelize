export default ReviewModel = (sequelize, DataTypes) => {

    // Define the Review model
    const Review = sequelize.define('review', {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    });
    return Review;
}