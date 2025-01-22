import { Router } from 'express';
import { DonateController } from './controller';

const router = Router();
const donateController = new DonateController();

router.get("/list-donate", donateController.showListDonate.bind(donateController));

router.get("/donate-form",  donateController.showFormDonate.bind(donateController));

router.get("/donatelist", donateController.getAllDonates.bind(donateController));
router.get("/donates/:id", donateController.getDonateById.bind(donateController));
router.post("/donates", donateController.createDonate.bind(donateController));
router.put("/donates/:id", donateController.updateDonate.bind(donateController));
router.delete("/donates/:id", donateController.deleteDonate.bind(donateController));

export default router;