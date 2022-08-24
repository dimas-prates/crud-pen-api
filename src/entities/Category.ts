import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {

	@PrimaryColumn()
		id: string;

	@Column()
		name: string;

	@Column()
		description: string;

	@CreateDateColumn()
		created_at: Date;

	// @OneToMany(() => Video, video => video.category_id)
	// videos: Video[]
	constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}