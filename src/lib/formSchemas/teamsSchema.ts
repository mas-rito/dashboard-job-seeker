import { z } from "zod";

const teamsSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string().max(255, "Input is too long").optional(),
  linkedin: z.string().max(255, "Input is too long").optional(),
});

export default teamsSchema;
