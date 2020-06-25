import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

class Vehicle extends Model {
  public id: string;
  public text: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Vehicle.init(
  {
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
  },
  { sequelize, modelName: 'vehicle' }
);

export type VehicleModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Vehicle;
};

export default Vehicle as VehicleModelStatic;
