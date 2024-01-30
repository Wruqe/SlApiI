const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Star extends Model {}

Star.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   star_num: {
    type: DataTypes.INTEGER,
    validate: {max: [5]},
   },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "star",
  }
);

module.exports = Star;