import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
// import { GetVideoController } from "../controllers/GetVideoController"
import { ListVideoController } from "../controllers/ListVideoController";
// import { DeleteVideoController } from "../controllers/DeleteVideoController"
// import { UpdateVideoController } from "../controllers/UpdateVideoController"
const videoRoute = Router();

videoRoute.post("/", new CreateVideoController().handle);
// videoRoute.get('/:id', new GetVideoController().handle)
videoRoute.get("/", new ListVideoController().handle);
// videoRoute.put('/:id', new DeleteVideoController().handle)
// videoRoute.delete('/:id', new UpdateVideoController().handle)

export default videoRoute;
