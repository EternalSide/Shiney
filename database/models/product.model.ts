import {Schema, models, model, Document} from "mongoose";

export interface IProduct extends Document {
	title: string;
	description: string;
	picture: string;
	createdAt: Date;
	category: Schema.Types.ObjectId[];
	shop: Schema.Types.ObjectId;
	comments: Schema.Types.ObjectId[];
	price: string;
}

const ProductSchema = new Schema<IProduct>(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
		},
		price: {
			type: String,
		},
		category: [
			{
				type: Schema.Types.ObjectId,
				ref: "Category",
			},
		],
		shop: {
			type: Schema.Types.ObjectId,
			ref: "Shop",
		},
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
	}
);

const Product = models?.Product || model<IProduct>("Post", ProductSchema);

export default Product;
