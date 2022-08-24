import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";
type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
	async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
		const categoryRepostiroy = AppDataSource.getRepository(Category);

		if (await categoryRepostiroy.findOneBy({ name })) {
			return new Error("Category already exists");
		}
		const category = categoryRepostiroy.create({
			name, description
		});

		await categoryRepostiroy.save(category);

		return category;
	}
}