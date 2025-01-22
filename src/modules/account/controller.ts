import { Request, Response } from "express";
import { AccountService } from "./service";

export class AccountController {
  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  showLoginPage(req: Request, res: Response): void {
    res.render("login-page");
  }

  showRegisterPage(req: Request, res: Response): void {
    res.render("register-page");
  }

  showAllAccount(req: Request, res: Response): void {
    this.accountService
      .getAllAccounts()
      .then((accounts) => {
        res.status(200).json(accounts);
      })
      .catch((error) => {
        console.error("Error get all account: ", error);
      });
  }

  handleLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
  
    this.accountService
      .login(email, password)
      .then((account) => {
        if (account) {
  
          res.status(200).json({ success: true, redirect: "/home", account});
        } else {
          res.status(401).json({ success: false, message: "Invalid credentials" });
        }
      })
      .catch((error) => {
        res.status(400).json({ success: false, message: error.message || "Login failed" });
      });
  }
  

  handleRegister(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    this.accountService
      .createAccount(email, password)
      .then((newAccount) => {
        console.log(newAccount);
        res.status(200).json({ success: true, data: newAccount });
      })
      .catch((error) => {
        console.error("Error creating account: ", error);
        res.render("register-page", { message: "Error creating account!" });
      });
  }

  handleUpdateAccount(req: Request, res: Response): void {
    const { email } = req.params;
    const { newPassword } = req.body;
    this.accountService
      .updateAccountPassword(email, newPassword)
      .then((updatedAccount) => {
        if (updatedAccount) {
          res.status(200).json(updatedAccount);
        } else {
          res.status(404).json({ message: "Account not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Error updating account", error });
      });
  }

  handleDeleteAccount(req: Request, res: Response): void {

    const { email } = req.params;
    //const { a, b } = req.query;
    this.accountService
      .deleteAccount(email)
      .then((deleted) => {
        if (deleted) {
          res.status(200).json({ message: "Account deleted" });
        } else {
          res.status(404).json({ message: "Account not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Error deleting account", error });
      });
  }
}
