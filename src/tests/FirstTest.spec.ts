import { Category } from "../entities/Category";

test("it should be ok", () => {
	const category = new Category();
	category.name = "Horror";

	expect(category.name).toEqual("Horror");
});