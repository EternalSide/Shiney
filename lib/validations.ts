import * as z from "zod";

const FIELD_MIN_ERROR = "Поле не может быть меньше 2 символов";
const FIELD_MAX_ERROR = "Поле не может быть больше 30 символов";

export const shopSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: FIELD_MIN_ERROR,
		})
		.max(30, {
			message: FIELD_MAX_ERROR,
		}),
	link: z
		.string()
		.min(2, {
			message: FIELD_MIN_ERROR,
		})
		.max(30, {
			message: FIELD_MAX_ERROR,
		}),
	description: z
		.string()
		.min(2, {
			message: FIELD_MIN_ERROR,
		})
		.max(30, {
			message: FIELD_MAX_ERROR,
		}),
});
