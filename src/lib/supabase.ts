import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!
);

export const supabaseUploadFile = async (
  file: File | string,
  fileName: string,
  bucket: "company" | "applicant"
) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return { data, error, fileName };
};

export const supabaseGetFileUrl = async (
  fileName: string,
  bucket: "company" | "applicant"
) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return { publicUrl: data.publicUrl };
};

export const supabaseDeleteFile = async (
  fileName: string,
  bucket: "company" | "applicant"
) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove(["public/" + fileName]);

  return { error };
};

export const supabaseUpdateFile = async (
  file: File | string,
  fileName: string,
  bucket: "company" | "applicant"
) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .update("public/" + fileName, file, {
      cacheControl: "3600",
      upsert: true,
    });

  return { data, error };
};
