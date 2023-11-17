import {Schema, models, model, Document} from "mongoose";

export interface IShop extends Document {
	name: string;
	avatar: string;
	banner: string;
	description: string;
	author: Schema.Types.ObjectId;
	products: Schema.Types.ObjectId[];
	buyCount: number;
	verified: boolean;
	createdOn: Date;
}

const ShopSchema = new Schema<IShop>(
	{
		name: {
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
		author: {
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
		createdOn: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
	}
);

const Shop = models.Shop || model<IShop>("Shop", ShopSchema);

export default Shop;
