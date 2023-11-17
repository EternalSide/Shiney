import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";

export const createUser = async (userData: any) => {
	try {
		entryDatabase();

		const user = await User.create(userData);

		return user;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
