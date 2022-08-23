import { Request, Response } from "express";
import { UpdateCategoryService } from '../services/UpdateCategoryService'
export class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { name, description } = req.body
        const { id } = req.params
        const service = new UpdateCategoryService();
        const result = await service.execute({ id, name, description })
        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }
        return res.status(200).json(result)
    }
}