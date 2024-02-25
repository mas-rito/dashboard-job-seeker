// @flow
import { Button } from "@/components/ui/button";
import overviewSchema from "@/lib/formSchemas/overviewSchema";
import Image from "next/image";
import * as React from "react";
import { UseFormReturn } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { z } from "zod";
type Props = {
  form: UseFormReturn<z.infer<typeof overviewSchema>>;
  name: keyof z.infer<typeof overviewSchema>;
};
export default function UploadImage({ form, name }: Props) {
  const [previewImg, setPreviewImg] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setPreviewImg(URL.createObjectURL(file));
      form.setValue(name, file);
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="inline-flex items-center gap-8">
      <div>
        <p className="text-muted-foreground mb-4">Upload Image</p>
        <Button onClick={handleUploadFile}>
          <FiUploadCloud className="text-xl" />
        </Button>
      </div>
      {previewImg && (
        <Image
          width={200}
          height={200}
          src={previewImg}
          alt="preview company"
        />
      )}
      <input
        ref={inputRef}
        onChange={handleChange}
        type="file"
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}
