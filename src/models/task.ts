import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import PartsUsed from './partsUsed';

export class Task extends Model {
  public duration: number;
  public description: string;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly userId: string;
  public readonly jobId: string;
}

Task.init(
  {
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'task' }
);

Task.hasMany(PartsUsed);
PartsUsed.belongsTo(Task);

export type TaskModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Task;
};

export default Task as TaskModelStatic;
