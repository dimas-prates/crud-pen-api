import { Request, Response } from "express";
import { GetCategoryService } from "../services/GetCategoryService"
export class GetCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const service = new GetCategoryService();
        const result = await service.execute(id)
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result)

    }
}