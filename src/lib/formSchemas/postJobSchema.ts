import { JOBTYPES } from "@/constants";
import { z } from "zod";

const postJobSchema = z.object({
  roles: z
    .string({ required_error: "Title is required" })
    .min(3, "Title must be at least 3 characters")
    .max(255, "Title is too long"),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary from is required" }),
  salaryTo: z.string({ required_error: "Salary to is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkills: z.string().array().nonempty({
    message: "At least one skill is required",
  }),
  jobDescription: z
    .string({ required_error: "Job description is required" })
    .min(20, "Input must be at least 20 characters")
    .max(500, "Input is too long"),
  responsibility: z
    .string({ required_error: "Job description is required" })
    .min(20, "Input must be at least 20 characters")
    .max(500, "Input is too long"),
  whoYouAre: z
    .string({ required_error: "Job description is required" })
    .min(20, "Input must be at least 20 characters")
    .max(500, "Input is too long"),
  niceToHave: z
    .string({ required_error: "Job description is required" })
    .min(20, "Input must be at least 20 characters")
    .max(500, "Input is too long"),
  benefits: z
    .object(
      {
        benefit: z.string(),
        description: z.string(),
      },
      { required_error: "Benefits is required" }
    )
    .array()
    .nonempty({
      message: "At least one benefit is required",
    }),
});

export default postJobSchema;
