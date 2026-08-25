import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(80),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  inquiryType: z.enum(["general", "bulk-order", "catering", "feedback"]),
  date: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().min(8, "Please add a short message.").max(600),
  website: z.string().max(0).optional()
});

export type InquiryInput = z.infer<typeof inquirySchema>;
