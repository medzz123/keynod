import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

export class Customer extends Model {
  public name: string;
  public phone: string;
  public email: string;
  public address: string;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Customer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'customer' }
);

export type CustomerModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Customer;
};

export default Customer as CustomerModelStatic;
