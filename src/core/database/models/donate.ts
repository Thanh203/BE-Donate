import { Model, DataTypes, Sequelize, Optional } from "sequelize";
import { sequelize } from "../../../app";

interface DonateAttributes {
  id: number;
  name: string;
  address: string | null;
  amount: number;
  holder: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface DonateCreationAttributes extends Optional<DonateAttributes, "id"> {}

export class Donate
  extends Model<DonateAttributes, DonateCreationAttributes>
  implements DonateAttributes
{
  public id!: number;
  public name!: string;
  public address!: string | null;
  public amount!: number;
  public holder!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Donate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    holder: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "donate",
    tableName: "donates",
    timestamps: true,
  }
);

export default Donate;
