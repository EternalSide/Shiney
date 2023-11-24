import {Schema, models, model, Document} from "mongoose";

export interface IShop extends Document {
	name: string;
	link: string;
	avatar: string;
	banner: string;
	description: string;
	rating: string;
	buyCount: number;
	verified: boolean;
	creator: Schema.Types.ObjectId;
	products: Schema.Types.ObjectId[];
	followers: Schema.Types.ObjectId[];
	comments: Schema.Types.ObjectId[];
	createdOn: Date;
}

const ShopSchema = new Schema<IShop>(
	{
		name: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
			unique: true,
		},

		avatar: {
			type: String,
		},
		banner: {
			type: String,
		},
		description: {
			type: String,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		followers: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
		buyCount: {
			type: Number,
			default: 0,
		},
		rating: {
			type: String,
			default: `0.00`,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		createdOn: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
	}
);

const Shop = models?.Shop || model<IShop>("Shop", ShopSchema);

export default Shop;
