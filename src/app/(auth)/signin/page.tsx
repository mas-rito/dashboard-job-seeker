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
import { signInSchema } from "@/lib/formSchemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {};
export default function SignIn({}: Props) {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (data: z.infer<typeof signInSchema>) => {
    const authenticated = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (authenticated?.error) {
      toast({
        title: "Error",
        description: "Email or password may be incorrect",
        variant: "destructive",
      });
      return;
    }

    await router.push("/");
  };

  return (
    <div className="p-6 bg-slate-50 shadow-md rounded">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-1">
              Sign In Your Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to sign in
            </p>
          </div>
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
          />{" "}
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
            Sign In
          </Button>
          <Separator />
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span className="text-primary">
              <Link href="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
}
