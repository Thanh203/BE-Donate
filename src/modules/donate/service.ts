import Donate from "../../core/database/models/donate";
import { Op, fn, col } from "sequelize"; 

export class DonateService {

  public createDonate = async (
    name: string,
    address: string,
    amount: number,
    holder: string
  ): Promise<Donate> => {
    try {
      const newDonate = await Donate.create({ name, address, amount, holder });
      return newDonate;
    } catch (error) {
      console.error("Error creating Donate:", error);
      throw new Error("Unable to create donation.");
    }
  };

  public getAllDonates = async (
    page: number = 1,
    limit: number = 10
  ): Promise<Donate[]> => {
    try {
      const offset = (page - 1) * limit;

      const { rows: donates} = await Donate.findAndCountAll({
        offset,
        limit,
        order: [["createdAt", "DESC"]],
      });

      return donates ;
    } catch (error) {
      console.error("Error in getAllDonates:", error);
      throw new Error("Unable to fetch donations.");
    }
  };

  public updateDonate = async (
    id: number,
    newName: string,
    newAddress: string,
    newAmount: number,
    newHolder: string
  ): Promise<Donate | null> => {
    try {
      const donate = await Donate.findOne({ where: { id } });

      if (!donate) {
        throw new Error("Donation not found.");
      }

      donate.name = newName;
      donate.address = newAddress;
      donate.amount = newAmount;
      donate.holder = newHolder;

      await donate.save();
      return donate;
    } catch (error) {
      console.error("Error updating Donate:", error);
      throw new Error("Unable to update donation.");
    }
  };

  public deleteDonate = async (id: number): Promise<boolean> => {
    try {
      const donate = await Donate.findOne({ where: { id } });

      if (!donate) {
        throw new Error("Donation not found.");
      }

      await donate.destroy();
      return true;
    } catch (error) {
      console.error("Error deleting Donate:", error);
      throw new Error("Unable to delete donation.");
    }
  };

  public getOneDonate = async (id: number): Promise<Donate | null> => {
    try {
      const donate = await Donate.findOne({ where: { id } });
  
      if (!donate) {
        throw new Error("Donation not found.");
      }
  
      return donate;
    } catch (error) {
      console.error("Error in getOneDonate:", error);
      throw new Error("Unable to fetch donation.");
    }
  };
  
  public getTotalDonates = async (): Promise<number> => {
    try {
      const totalDonates = await Donate.count();
      return totalDonates;
    } catch (error) {
      console.error("Error in getTotalDonates:", error);
      throw new Error("Unable to get total donations count.");
    }
  };

  public getTotalAmount = async (): Promise<number> => {
    try {
      const totalAmountResult = await Donate.findOne({
        attributes: [[fn("SUM", col("amount")), "totalAmount"]],
        raw: true,
      }) as unknown as { totalAmount: number };
  
      return totalAmountResult ? totalAmountResult.totalAmount : 0;
    } catch (error) {
      console.error("Error in getTotalAmount:", error);
      throw new Error("Unable to get total donations amount.");
    }
  };
  
}
