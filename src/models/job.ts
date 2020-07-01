import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

enum JobStatus {
  COMPLETE = 'COMPLETE',
  ONGOING = 'ONGOING',
  PENDING = 'PENDING',
}

enum JobType {
  REPAIR = 'REPAIR',
  MOT = 'MOT',
}

export class Job extends Model {
  public startDate: Date;
  public endDate: Date;
  public jobStatus: JobStatus;
  public jobType: JobType;
  public estimatedTime: number;
  public timeTaken: number;

  // Readonly
  public readonly id: string;
  public readonly dateBooked: Date;

  // Generated
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign keys
  public readonly vehicleId: string;
}

Job.init(
  {
    dateBooked: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    jobStatus: {
      type: DataTypes.ENUM({
        values: Object.values(JobStatus),
      }),
      defaultValue: JobStatus.PENDING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jobType: {
      type: DataTypes.ENUM({
        values: Object.values(JobType),
      }),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    estimatedTime: {
      type: DataTypes.INTEGER,
    },
    timeTaken: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, modelName: 'job' }
);

export type JobModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Job;
};

export default Job as JobModelStatic;
