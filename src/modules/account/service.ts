import Account from "../../core/database/models/accounts";
import bcrypt from "bcryptjs";

export class AccountService {
  public createAccount = async (
    email: string,
    password: string
  ): Promise<Account> => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAccount = await Account.create({ email, password: hashedPassword });
      return newAccount;
    } catch (error) {
      console.error("Error creating account:", error);
      throw new Error("Unable to create account.");
    }
  };

  public getAllAccounts = async (): Promise<Account[]> => {
    try {
      const accounts = await Account.findAll();
      return accounts;
    } catch (error) {
      console.error("Error in getAllAccounts:", error);
      throw new Error("Unable to fetch accounts.");
    }
  };

  public updateAccountPassword = async (
    email: string,
    newPassword: string
  ): Promise<Account | null> => {
    try {
      const account = await Account.findOne({ where: { email } });

      if (!account) {
        throw new Error("Account not found.");
      }

      account.password = await bcrypt.hash(newPassword, 10);
      await account.save();
      return account;
    } catch (error) {
      console.error("Error updating account password:", error);
      throw new Error("Unable to update password.");
    }
  };

  public deleteAccount = async (email: string): Promise<boolean> => {
    try {
      const account = await Account.findOne({ where: { email } });

      if (!account) {
        throw new Error("Account not found.");
      }

      await account.destroy();
      return true;
    } catch (error) {
      console.error("Error deleting account:", error);
      throw new Error("Unable to delete account.");
    }
  };

  public login = async (
    email: string,
    password: string
  ): Promise<Account> => {
    try {
      const account = await Account.findOne({ where: { email } });

      if (!account) {
        throw new Error("Account not found.");
      }

      const isPasswordValid = await bcrypt.compare(password, account.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password.");
      }

      return account;
    } catch (error) {
      console.error("Error in login:", error);
      throw new Error("Unable to log in.");
    }
  };
}
