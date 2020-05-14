import routerx from "express-promise-router";
import cartegoriaRouter from "./category";
import articleRouter from "./article";

const router = routerx();

router.use("/category", cartegoriaRouter);
router.use("/article", articleRouter);

export default router;
