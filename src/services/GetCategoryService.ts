import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

export class GetCategoryService {
	async execute(id: string) {
		const categoryRepostiroy = AppDataSource.getRepository(Category);
		const category = await categoryRepostiroy.findOneBy({ id });
		if (!category) {
			return new Error("Category doesn't exist");
		}
		return category;
	}
}