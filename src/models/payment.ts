import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

enum PaymentStatus {
  SETTLED = 'SETTLED',
  PENDING = 'PENDING',
}

export class Payment extends Model {
  public amount: string;
  public dateSettled: Date;
  public lastRequested: Date;
  public paymentStatus: PaymentStatus;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign keys
  public readonly jobId: string;
  public readonly customerId: string;
}

Payment.init(
  {
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dateSettled: {
      type: DataTypes.DATE,
    },
    lastRequested: {
      type: DataTypes.DATE,
    },
    paymentStatus: {
      type: DataTypes.ENUM({
        values: Object.values(PaymentStatus),
      }),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'payment' }
);

export type PaymentModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Payment;
};

export default Payment as PaymentModelStatic;
