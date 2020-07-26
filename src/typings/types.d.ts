import { ModelsType } from '../models';
import { Customer } from '../models/customer';
import { Job } from '../models/job';
import { JobManager } from '../models/jobManager';
import { Part } from '../models/part';
import { PartsUsed } from '../models/partsUsed';
import { Payment } from '../models/payment';
import { Task } from '../models/task';
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';

export type PartModel = Part;
export type CustomerModel = Customer;
export type UserModel = User;
export type VehicleModel = Vehicle;
export type JobManagerModel = JobManager;
export type TaskModel = Task;
export type PartsUsedModel = PartsUsed;
export type JobModel = Job;
export type PaymentModel = Payment;

export interface MyContext {
  secret: string;
  me: User;
  models: ModelsType;
  loaders: {
    user: {
      load: (id: string) => Promise<User>;
    };
    vehicle: {
      load: (id: string) => Promise<Vehicle>;
    };
    customer: {
      load: (id: string) => Promise<Customer>;
    };
  };
}
