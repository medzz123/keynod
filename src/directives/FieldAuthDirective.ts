import { SchemaDirectiveVisitor } from "apollo-server";
import { defaultFieldResolver } from "graphql";
import strategies from "../strategies";

class FieldAuthDirective extends SchemaDirectiveVisitor {
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field, details) {
    console.log("FieldAuthDirective:visitFieldDef", { field, details });
    this.ensureFieldWrapped(field);
    field._fromAuthRole = this.args.requires;
  }

  ensureFieldWrapped(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      // Get the required Role from the field first, falling back
      // to the objectType if no Role is required by the field:
      const requiredRole = field._requiredAuthRole;

      console.log("FIELD", field);
      console.log("ARGS", args);

      if (!requiredRole) {
        // Let's be on the safe side
        console.log("I am on required role!");
        throw new Error("not authorized");
      }

      const requestData = args[2];
      await this.executeStrategy(requiredRole, requestData);

      return resolve.apply(this, args);
    }.bind(this);
  }

  async executeStrategy(role, requestData) {
    const strategyResult = await strategies[role.toLowerCase()](requestData);

    if (!strategyResult) {
      console.log("I am on strategy result");
      throw new Error("not authorized");
    }
  }
}

export default FieldAuthDirective;
