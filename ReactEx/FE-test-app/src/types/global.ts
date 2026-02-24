import z from "zod";


export type formInputT = {
    label: string;
    type: string;
    name: string;
}




export const formDataScheme = z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(6, "Address must be at least 6 characters long"),
    city: z.string().min(4, "City must be at least 6 characters long")
});

export type formDataT = z.infer<typeof formDataScheme>;