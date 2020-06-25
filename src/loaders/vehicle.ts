import Sequelize from "sequelize";

export const batchVehicles = async (keys, models) => {
  const vehicles = await models.Vehicle.findAll({
    where: {
      regNo: {
        [Sequelize.Op.in]: keys,
      },
    },
  });

  return keys.map((key) => vehicles.find((vehicle) => vehicle.regNo === key));
};
