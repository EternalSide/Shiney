import {Schema, models, model, Document} from "mongoose";

export interface IUser extends Document {
	clerkId: string;
	name: string;
	username: string;
	email: string;
	picture?: string;
	password?: string;
	role?: string;
	about?: string;
	shops: Schema.Types.ObjectId[];
	savedProducts: Schema.Types.ObjectId[];
	orderedProducts: Schema.Types.ObjectId[];
	joinedAt: Date;
}

const UserSchema = new Schema<IUser>(
	{
		clerkId: {type: String, required: true},
		name: {type: String, required: true},
		username: {type: String, required: true, unique: true},
		email: {type: String, required: true, unique: true},
		password: {type: String},
		about: {type: String},
		picture: {type: String, required: true},
		shops: [{type: Schema.Types.ObjectId, ref: "Shop"}],
		savedProducts: [{type: Schema.Types.ObjectId, ref: "Product"}],
		orderedProducts: [{type: Schema.Types.ObjectId, ref: "Product"}],
		joinedAt: {type: Date, default: Date.now},
		role: {type: String, default: "user"},
	},
	{
		versionKey: false,
	}
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
