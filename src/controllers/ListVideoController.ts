import { Request, Response } from "express"
import { ListVideoService } from "../services/ListVideoService"
export class ListVideoController {
    async handle(req: Request, res: Response) {
        const service = new ListVideoService();
        const videos = await service.execute();
        return res.json(videos)
    }
}