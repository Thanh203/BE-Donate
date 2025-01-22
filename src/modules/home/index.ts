import { Router } from 'express';
// import { requireAuth } from "../../middlewares/auth";

const router = Router();

router.get("/home", (req, res) => {
    res.render("home-page");
});


export default router;