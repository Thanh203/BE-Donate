import { Router } from 'express';
import accountRoutes from './modules/account/index';
import homeRouters from './modules/home/index';
import donateRouters from './modules/donate/index';

const router = Router();


router.use('/account', accountRoutes);
router.use('/', homeRouters);
router.use('/', donateRouters);



export default router;