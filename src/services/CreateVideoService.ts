import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
	async execute({ name, description, duration, category_id, }: VideoRequest): Promise<Video | Error> {
		const videoRepository = AppDataSource.getRepository(Video);
		const categoryRepostiroy = AppDataSource.getRepository(Category);

		if (!await categoryRepostiroy.findOneBy({ id: category_id })) {
			return new Error("Category doesn't exist");
		}
		const video = videoRepository.create({ name, description, duration, category_id });
		await videoRepository.save(video);
		return video;
	}
}

