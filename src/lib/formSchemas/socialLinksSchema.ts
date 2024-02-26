import { z } from "zod";

const socialLinksSchema = z.object({
  facebook: z.string().max(255, "Input is too long").optional(),
  twitter: z.string().max(255, "Input is too long").optional(),
  linkedin: z.string().max(255, "Input is too long").optional(),
  instagram: z.string().max(255, "Input is too long").optional(),
  youtube: z.string().max(255, "Input is too long").optional(),
});

export default socialLinksSchema;
