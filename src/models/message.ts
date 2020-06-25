import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';

export class Message extends Model {
  public id: string;
  public text: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Message.init(
  {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'A message has to have a text.',
        },
      },
    },
  },
  { sequelize, modelName: 'message' }
);

export type MessageModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Message;
};

export default Message as MessageModelStatic;
