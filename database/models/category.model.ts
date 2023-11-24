import {Schema, models, model, Document} from "mongoose";

export interface ICategory extends Document {
	label: string;
	href: string;
	products: Schema.Types.ObjectId[];
}

const CategorySchema = new Schema<ICategory>(
	{
		href: {
			type: String,
			required: true,
			unique: true,
		},
		label: {
			type: String,
			required: true,
			unique: true,
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
