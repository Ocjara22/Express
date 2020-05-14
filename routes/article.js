import routerx from "express-promise-router";
import ArticleController from "../controllers/ArticleController";

const router = routerx();

router.post("/add", ArticleController.add);
router.get("/query", ArticleController.query);
router.get("/list", ArticleController.list);
router.put("/update", ArticleController.update);
router.delete("/remove", ArticleController.remove);
router.put("/activate", ArticleController.activate);
router.put("/deactivate", ArticleController.deactivate);

export default router;
