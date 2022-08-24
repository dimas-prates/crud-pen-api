import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";
export class ListCategoryController {
	async handle(req: Request, res: Response) {
		const service = new ListCategoryService();
		const result = await service.execute();
		return res.status(200).json(result);
	}
}