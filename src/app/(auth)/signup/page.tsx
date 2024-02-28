"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { signUpSchema } from "@/lib/formSchemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {};
export default function SignUp({}: Props) {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (data: z.infer<typeof signUpSchema>) => {
    await fetch("/api/company/new-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          router.push("/signin");
        } else {
          form.setError("email", {
            type: "custom",
            message: "Email already exists",
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      });
  };
  return (
    <div className="p-6 bg-slate-50 shadow-md rounded">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-1">
              Sign Up Your Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill in your details to sign up
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    required
                    placeholder="ex: Job Seeker"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="email"
                    required
                    placeholder="ex: jobseeker@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    type="password"
                    required
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Separator />
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <span className="text-primary">
              <Link href="/signin">Sign In</Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
}
