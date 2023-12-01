import {Schema, models, model, Document} from "mongoose";

export interface IProduct extends Document {
	title: string;
	description: string;
	picture?: string;
	price: string;
	buyNumber?: number;
	categories: Schema.Types.ObjectId[];
	shop: Schema.Types.ObjectId;
	comments: Schema.Types.ObjectId[];
	createdAt: Date;
}

const ProductSchema = new Schema<IProduct>(
	{
		title: {
			type: String,
			required: true,
		},
		buyNumber: {
			type: Number,
			default: 0,
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
		categories: [
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

const Product = models?.Product || model<IProduct>("Product", ProductSchema);

export default Product;
