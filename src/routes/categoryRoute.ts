import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetCategoryController } from "../controllers/GetCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
const categoryRoute = Router();

categoryRoute.post("/", new CreateCategoryController().handle);
categoryRoute.get("/:id", new GetCategoryController().handle);
categoryRoute.get("/", new ListCategoryController().handle);
categoryRoute.put("/:id", new UpdateCategoryController().handle);
categoryRoute.delete("/:id", new DeleteCategoryController().handle);

export default categoryRoute;