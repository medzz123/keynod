import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import Job from './job';
import User from './user';

export class TaskManager extends Model {
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

TaskManager.init(
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
  { sequelize, modelName: 'taskManager' }
);

TaskManager.belongsTo(User);
User.hasMany(TaskManager);

TaskManager.hasOne(Job);

export type TaskManagerModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): TaskManager;
};

export default TaskManager as TaskManagerModelStatic;
