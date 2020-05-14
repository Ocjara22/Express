import routerx from "express-promise-router";
import cartegoriaRouter from "./category";

const router = routerx();

router.use("/category", cartegoriaRouter);

export default router;
