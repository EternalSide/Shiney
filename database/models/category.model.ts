// Главная категория обьединяющая другие.
// Например - Электроника.
import {Schema, models, model, Document} from "mongoose";

export interface ICategory extends Document {
	name: string;
	products: Schema.Types.ObjectId[];
	parent: Schema.Types.ObjectId;
}

const CategorySchema = new Schema<ICategory>(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		parent: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{
		versionKey: false,
	}
);

const Category = models.Category || model("Category", CategorySchema);

export default Category;
