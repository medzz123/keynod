import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import Job from './job';

export class Vehicle extends Model {
  public model: string;
  public yearsUsed: number;
  public regNo: string;

  // Generated
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly customerId: string;
}

Vehicle.init(
  {
    regNo: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    yearsUsed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'vehicle' }
);

Vehicle.hasMany(Job);
Job.belongsTo(Vehicle);

export type VehicleModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Vehicle;
};

export default Vehicle as VehicleModelStatic;
