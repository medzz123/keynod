import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import Vehicle from './vehicle';

class Customer extends Model {
  public id: string;
  public name: string;
  public contact: string;
  public phone: string;
  public email: string;
  public lineOne: string;
  public lineTwo: string;
  public city: string;
  public country: string;
  public postcode: string;
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
    contact: {
      type: DataTypes.STRING,
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
    lineOne: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lineTwo: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'customer' }
);

Customer.hasMany(Vehicle, { onDelete: 'CASCADE' });
Vehicle.belongsTo(Customer);

export type CustomerModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Customer;
};

export default Customer as CustomerModelStatic;
