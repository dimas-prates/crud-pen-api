import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";
type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
	async execute({ id, name, description }: CategoryUpdateRequest) {

		const categoryRepostiroy = AppDataSource.getRepository(Category);
		const category = await categoryRepostiroy.findOneBy({ id });
		if (!category) {
			return new Error("Category doesn't exist");
		}
		category.name = name ? name : category.name;
		category.description = description ? description : category.description;
		await categoryRepostiroy.save(category);
		return category;
	}
}