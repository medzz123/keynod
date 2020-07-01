import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

export class PartsUsed extends Model {
  public quantity: number;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly taskManagerId: string;
  public readonly partId: string;
}

PartsUsed.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'partsUsed' }
);

export type PartsUsedModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): PartsUsed;
};

export default PartsUsed as PartsUsedModelStatic;
