// @flow
import * as React from "react";
import DialogAddBenefit from "./DialogAddBenefit";
import BenefitType from "@/types/benefitType";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import postJobSchema from "@/lib/formSchemas/postJobSchema";
import { PartyPopper, X } from "lucide-react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
type Props = {
  form: UseFormReturn<z.infer<typeof postJobSchema>>;
};
const InputBenefits = ({ form }: Props) => {
  const [benefits, setBenefits] = React.useState<BenefitType[]>([]);

  const updateBenefits = (items: BenefitType) => {
    // Variabel untuk menampung semua benefits baik yang lama dan yang terbaru
    const newValue: [BenefitType, ...BenefitType[]] = [items, ...benefits];

    // Mengeset variable yang menampung benefits ke state
    setBenefits(newValue);
    // mengirmkan variable benefits ke input form yang bernama benefits
    form.setValue("benefits", newValue);
  };

  const handleDeleteValue = (value: string) => {
    // Membuat variabel baru yang menampung semua data kecuali value yang ingin dihapus
    const newValue: any = benefits.filter((item) => item.benefit !== value);
    // Mengeset value ke state
    setBenefits([...newValue]);
    // mengirmkan variable benefits ke input form yang bernama benefits
    form.setValue("benefits", newValue);
  };

  return (
    <>
      <DialogAddBenefit updateBenefits={updateBenefits} />
      <div className="grid grid-cols-3 gap-4 mt-5">
        {benefits.map((item: BenefitType, i: number) => (
          <div key={i} className="relative border border-gray-200 rounded p-3">
            <PartyPopper className="text-2xl text-primary" />

            <button
              type="button"
              className="absolute top-2 right-2 hover:text-red-500"
              onClick={() => handleDeleteValue(item.benefit)}
            >
              <X />
            </button>

            <h2 className="text-lg font-semibold">{item.benefit}</h2>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default InputBenefits;
