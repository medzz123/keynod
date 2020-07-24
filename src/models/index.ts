import Customer, { CustomerModelStatic } from './customer';
import Job, { JobModelStatic } from './job';
import JobManager, { JobManagerModelStatic } from './jobManager';
import Part, { PartModelStatic } from './part';
import PartsUsed, { PartsUsedModelStatic } from './partsUsed';
import Payment, { PaymentModelStatic } from './payment';
import TaskManager, { TaskManagerModelStatic } from './taskManager';
import User, { UserModelStatic } from './user';
import Vehicle, { VehicleModelStatic } from './vehicle';
export default {
  Part,
  Customer,
  User,
  Vehicle,
  JobManager,
  TaskManager,
  PartsUsed,
  Job,
  Payment,
};

export interface ModelsType {
  Part: PartModelStatic;
  Customer: CustomerModelStatic;
  Vehicle: VehicleModelStatic;
  User: UserModelStatic;
  JobManager: JobManagerModelStatic;
  TaskManager: TaskManagerModelStatic;
  PartsUsed: PartsUsedModelStatic;
  Job: JobModelStatic;
  Payment: PaymentModelStatic;
}
