import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

class Part extends Model {
  public id: string;
  public name: string;
  public quantity: number;
  public price: string;
  public manufacturer: string;
  public description: string;
  public vehicleType: string;
  public threshold: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Part.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    threshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'part' }
);

export type PartModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Part;
};

export default Part as PartModelStatic;
