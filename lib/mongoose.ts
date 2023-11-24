import mongoose from "mongoose";

let isConnected = false;

const entryDatabase = async () => {
	try {
		mongoose.set("strictQuery", true);

		if (!process.env.MONGODB_URL)
			return console.log("❌ Ошибка: не установлен MONGODB_URL");

		if (isConnected) return;

		await mongoose.connect(`${process.env.MONGODB_URL}`, {
			dbName: "Shiney",
		});

		isConnected = true;
	} catch (e) {
		console.log("Ошибка в mongoose.ts", e);
	}
};

export default entryDatabase;
