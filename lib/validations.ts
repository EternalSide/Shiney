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
            .regex(/^[a-zA-Z0-9]+$/, {
                  message: "Допустимый формат адреса магазина A-Z",
            })
            .min(2, {
                  message: FIELD_MIN_ERROR,
            })
            .max(30, {
                  message: FIELD_MAX_ERROR,
            })
            .refine((s) => !s.includes(" "), "Ссылка не может содержать пробелы"),
      description: z
            .string()
            .min(2, {
                  message: FIELD_MIN_ERROR,
            })
            .max(30, {
                  message: FIELD_MAX_ERROR,
            }),
});

export const productSchema = z.object({
      title: z
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
            .max(1000, {
                  message: FIELD_MAX_ERROR,
            }),
      price: z
            .string()
            .min(2, {
                  message: "Цена не может быть меньше 10 ₽",
            })
            .max(7, {
                  message: "Цена не может быть больше 1000000 ₽",
            }),
      categoryHref: z.string(),
});

// * Опциональное поле для схемы
// const emptyStringToUndefined = z.literal("").transform(() => undefined);

// export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
//       return schema.optional().or(emptyStringToUndefined);
// }
