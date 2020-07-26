import { ModelsType } from '../models';
import { Customer } from '../models/customer';
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';

export type CustomerModel = Customer;
export type VehicleModel = Vehicle;

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
