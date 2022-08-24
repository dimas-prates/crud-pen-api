import { CreateDateColumn, Column, PrimaryColumn, Entity, ManyToOne, JoinColumn } from "typeorm";
import { randomUUID } from "crypto";
import { Category } from "./Category";

@Entity("videos")
export class Video {

	@PrimaryColumn()
		id: string;

	@Column()
		name: string;

	@Column()
		description: string;

	@Column()
		duration: number;

	@Column()
		category_id: string;

	@ManyToOne(() => Category)
	@JoinColumn({ name: "category_id" })
		category: Category;

	@CreateDateColumn()
		created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = randomUUID();
		}
	}
}