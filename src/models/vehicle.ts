const vehicle = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("vehicle", {
    regNo: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    yearsUsed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Vehicle.associate = (models) => {
    Vehicle.belongsTo(models.Customer);
  };

  return Vehicle;
};

export default vehicle;
