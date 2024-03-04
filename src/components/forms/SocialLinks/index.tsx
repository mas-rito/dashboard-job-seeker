"use client";
import { FieldInput } from "@/components/oraganisms/FieldInput";
import socialLinksSchema from "@/lib/formSchemas/socialLinksSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { CompanySocialMedia } from "@prisma/client";
type Props = {
  detail: CompanySocialMedia | undefined;
};
export default function SocialLinks({ detail }: Props) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof socialLinksSchema>>({
    resolver: zodResolver(socialLinksSchema),
    defaultValues: {
      facebook: detail?.facebook!!,
      twitter: detail?.twitter!!,
      linkedin: detail?.linkedin!!,
      instagram: detail?.instagram!!,
      youtube: detail?.youtube!!,
    },
  });

  const handleSubmit = async (data: z.infer<typeof socialLinksSchema>) => {
    try {
      const body = {
        ...data,
        companyId: session?.user?.id,
      };

      await fetch(`/api/company/social-link`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      router.refresh;

      toast({
        title: "Success",
        description: "Social Links added successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });

      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FieldInput title="Social Links" subtitle="Enter your social links">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="https://facebook.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="https://twitter.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="https://linkedin.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="https://instagram.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="youtube"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Youtube</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="https://youtube.com/..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FieldInput>
        <div className="flex justify-end">
          <Button size={"lg"} type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}
