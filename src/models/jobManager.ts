import { BuildOptions, Model } from 'sequelize';

import sequelize from '../db';

export class JobManager extends Model {
  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly userId: string;
  public readonly jobId: string;
}

JobManager.init({}, { sequelize, modelName: 'jobManager' });

export type JobManagerModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): JobManager;
};

export default JobManager as JobManagerModelStatic;
