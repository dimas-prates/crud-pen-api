import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
	async execute(id: string) {

		const categoryRepostiroy = AppDataSource.getRepository(Category);

		if (!await categoryRepostiroy.findOneBy({ id })) {
			return new Error("Category doesn't exist");
		}
		return await categoryRepostiroy.delete(id);
	}
}