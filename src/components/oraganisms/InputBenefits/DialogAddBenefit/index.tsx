// @flow
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BenefitType from "@/types/benefitType";
import { DialogTrigger } from "@radix-ui/react-dialog";
import * as React from "react";
import { FiPlus } from "react-icons/fi";
type Props = {
  updateBenefits: (items: BenefitType) => void;
};
const DialogAddBenefit = ({ updateBenefits }: Props) => {
  // Initialisasi state untuk mengontrol open atau close dialog
  const [open, setOpen] = React.useState(false);
  // Initialisasi ref untuk input benefit dan deskripsinya
  const benefitRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  //   fungsi untuk menghandle saat button save di clik
  const handleSaveBenefit = () => {
    // Mendapati value dari input
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;
    // Jika tidak ada value maka tidak return apapun
    if (!benefit || !description) return;

    // mengirimkan value ke fungsi updateBenefits yang ada di parent element
    updateBenefits({
      benefit,
      description,
    });

    // menutup dialog
    setOpen(false);

    // mereset input
    benefitRef.current.value = "";
    descriptionRef.current.value = "";
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" className="gap-x-2">
          <FiPlus className="text-xl" />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, clicks save when you&lsquo;re done
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 mb-5">
          <div>
            <Label htmlFor="benefit">Benefit</Label>
            <Input
              id="benefit"
              type="text"
              ref={benefitRef}
              placeholder="Fill your benefit.."
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              ref={descriptionRef}
              placeholder="Fill your description.."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleSaveBenefit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddBenefit;
