import { z } from "zod";

const overviewSchema = z.object({
  image: z.any().refine((item: any) => item?.name, {
    message: "Image is required",
  }),
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  website: z
    .string({ required_error: "Website is required" })
    .min(2, { message: "Email must be at least 2 characters" })
    .max(50, { message: "Email must be less than 50 characters" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  detaFound: z.date({ required_error: "Date is required" }),
  techStack: z
    .string({ required_error: "Tech stack is required" })
    .array()
    .nonempty({
      message: "At least one tech stack is required",
    }),
  description: z
    .string({ required_error: "Description is required" })
    .min(20, "Input must be at least 20 characters")
    .max(500, "Input is too long"),
});

export default overviewSchema;
