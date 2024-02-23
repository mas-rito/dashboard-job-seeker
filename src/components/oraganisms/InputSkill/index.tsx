// @flow
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import postJobSchema from "@/lib/formSchemas/postJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { z } from "zod";
type Props = {
  form: UseFormReturn<z.infer<typeof postJobSchema>>;
};
const InputSkill = ({ form }: Props) => {
  const [isHiden, setIsHidden] = React.useState<boolean>(false);
  const [values, setValues] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    // Mendapati value dari input
    const value = inputRef.current?.value;

    // Jika value tidak ada maka tidak return nilai apapun
    if (!value) return;

    // Menambahkan value ke dalam array
    const newValue: [string, ...string[]] = [value, ...values];

    // Mengeset value ke state
    setValues(newValue);

    // Mengeset value ke form
    form.setValue("requiredSkills", newValue);

    // Mereset input
    inputRef.current.value = "";
  };

  const handleDeleteValue = (value: string) => {
    // Membuat variabel baru yang menampung semua data kecuali value yang ingin dihapus
    const newValue: any = values.filter((item) => item !== value);

    // Mengeset value ke state
    setValues(newValue);

    // Mengeset value ke form
    form.setValue("requiredSkills", newValue);
  };

  return (
    <FormField
      control={form.control}
      name="requiredSkills"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <>
              <Button
                type="button"
                variant={"outline"}
                className="mb-2 gap-x-2 items-center"
                onClick={() => setIsHidden(!isHiden)}
              >
                <FiPlus className="text-xl" />
                Add skill
              </Button>
              {isHiden && (
                <div className="my-4 flex flex-row gap-x-4">
                  <Input ref={inputRef} className="w-1/3" />
                  <Button type="button" onClick={handleSaveValue}>
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((value: string, key: number) => (
                  <Badge key={key} variant={"outline"} className="gap-x-2">
                    <span className="text-base text-gray-800">{value}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteValue(value)}
                      className="hover:text-red-500"
                    >
                      <IoClose className="text-xl" />
                    </button>
                  </Badge>
                ))}
              </div>
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSkill;
