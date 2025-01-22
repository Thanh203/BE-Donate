import { Router } from 'express';
import { AccountController } from './controller';

const router = Router();
const accountController = new AccountController();

router.get('/register', accountController.showRegisterPage.bind(accountController));
router.post('/register', accountController.handleRegister.bind(accountController));

router.get('/login', accountController.showLoginPage.bind(accountController));
router.post('/login', accountController.handleLogin.bind(accountController));

router.get("/logout", (req, res) => {
    res.redirect("/account/login");
  });
  

router.put('/:email', accountController.handleUpdateAccount.bind(accountController));
//patch -- 
router.delete('/:email', accountController.handleDeleteAccount.bind(accountController));

router.get('/showAllAccount', accountController.showAllAccount.bind(accountController));

export default router;
