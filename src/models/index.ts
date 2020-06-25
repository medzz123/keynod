import Customer, { CustomerModelStatic } from './customer';
import Part, { PartModelStatic } from './part';
import User, { UserModelStatic } from './user';
import Vehicle, { VehicleModelStatic } from './vehicle';

export default {
  Part,
  Customer,
  User,
  Vehicle,
};

export interface ModelsType {
  Part: PartModelStatic;
  Customer: CustomerModelStatic;
  Vehicle: VehicleModelStatic;
  User: UserModelStatic;
}
