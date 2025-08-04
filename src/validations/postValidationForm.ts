import { z } from "zod";

export const postFormSchema = z.object({
    title: z.string()
        .min(10, {
            message: "El título debe contar con al menos 10 caractéres"
        })
        .max(100, {
            message: "El título no puede tener más de 100 caractéres"
        }),
    author: z.string()
        .min(10, {
            message: "El autor debe contar con al menos 10 caractéres"
        })
        .max(100, {
            message: "El autor no puede tener más de 100 caractéres"
        }),
    content: z.string()
        .min(50, {
            message: "El contenido debe contar con al menos 50 caractéres"
        })
        .max(300, {
            message: "El autor no puede tener más de 300 caractéres"
        }),
});

export type Inputs = z.infer<typeof postFormSchema>; 