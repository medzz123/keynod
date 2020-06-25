import bcrypt from 'bcrypt';
import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from '../db';
import Message from './message';

export class User extends Model {
  public id: string;
  public username: string;
  public email: string;
  public password: string;
  public role: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Method
  public findByLogin: (login: string) => Promise<User>;

  // Extra prototypes
  public generatePasswordHash: () => Promise<string>;
  public validatePassword: (password: string) => Promise<boolean>;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [7, 42],
      },
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'user' }
);

User.beforeCreate(async (user) => {
  user.password = await user.generatePasswordHash();
});

User.prototype.findByLogin = async (login) => {
  let user = await User.findOne({
    where: { username: login },
  });

  if (!user) {
    user = await User.findOne({
      where: { email: login },
    });
  }

  return user;
};

User.prototype.generatePasswordHash = async function () {
  const saltRounds = 10;
  return await bcrypt.hash(this.password, saltRounds);
};

User.prototype.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

User.hasMany(Message, { onDelete: 'CASCADE' });
Message.belongsTo(User);

export type UserModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): User;
};

export default User as UserModelStatic;
