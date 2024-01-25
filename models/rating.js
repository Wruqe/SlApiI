// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");
// const Post = require("./Post");

// class Rating extends Model {}

// Rating.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     rating: {
//       type: DataTypes.INTEGER,
//       allowNull: true, // Allow null values for post_rating
//       defaultValue: 0, // Add a default value (change 0 to your desired default)
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "rating",
//   }
// );

// Rating.associate = (models) => {
//   Rating.belongsTo(models.Post, {
//     foreignKey: {
//       name: "post_id",
//       allowNull: false,
//     },
//   });
// };

// module.exports = Rating;
