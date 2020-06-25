import Customer, { CustomerModelStatic } from './customer';
import Message, { MessageModelStatic } from './message';
import Part, { PartModelStatic } from './part';
import User, { UserModelStatic } from './user';
import Vehicle, { VehicleModelStatic } from './vehicle';

export default {
  Part,
  Customer,
  Message,
  User,
  Vehicle,
};

export interface ModelsType {
  Part: PartModelStatic;
  Customer: CustomerModelStatic;
  Vehicle: VehicleModelStatic;
  Message: MessageModelStatic;
  User: UserModelStatic;
}
