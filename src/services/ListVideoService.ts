import AppDataSource  from "../data-source";
import { Video } from "../entities/Video";

export class ListVideoService {
	async execute() {
		const videoRepository = AppDataSource.getRepository(Video);
		const videos = await videoRepository.find({ relations: { category: true } });
		return videos;
	}

}