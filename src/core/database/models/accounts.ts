import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../../../app";

interface AccountAttributes {
  email: string;
  password: string;
  createat?: Date;
  updateat?: Date;
}

interface AccountCreationAttributes extends Optional<AccountAttributes, 'createat' | 'updateat'> {}

class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
  public email!: string;
  public password!: string;
  public createat!: Date;
  public updateat!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Account.init(
  {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true, // Email là khóa chính
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    createat: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updateat: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'account',
    tableName: 'accounts',
    timestamps: false, 
  }
);

export default Account;
