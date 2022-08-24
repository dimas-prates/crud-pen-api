import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";
type CategoryRequest = {
    name: string;
    description: string;
}

export class ListCategoryService {
	async execute() {
		const categoryRepostiroy = AppDataSource.getRepository(Category);

		const category = await categoryRepostiroy.find({relations:{}});

		return category;
	}
}