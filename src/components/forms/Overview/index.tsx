"use client";
import { TitleForm } from "@/components/atoms/TitleForm";
import { FieldInput } from "@/components/oraganisms/FieldInput";
import UploadImage from "@/components/oraganisms/UploadImage";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { EMPLOYEE_OPTIONS, LOCATION_OPTIONS } from "@/constants";
import overviewSchema from "@/lib/formSchemas/overviewSchema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import InputSkill from "@/components/oraganisms/InputSkill";
import CKEditor from "@/components/oraganisms/CKEditor";

type Props = {};
export default function Overview(props: Props) {
  const [editorloaded, setEditorloaded] = React.useState(false);
  React.useEffect(() => {
    setEditorloaded(true);
  }, []);

  const form = useForm<z.infer<typeof overviewSchema>>({
    resolver: zodResolver(overviewSchema),
  });

  const onSubmit = (data: z.infer<typeof overviewSchema>) => {
    console.log(data);
  };

  return (
    <div className="pb-10">
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>
      <Separator className="my-5" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FieldInput title="Company Name" subtitle="Enter your company name">
            <UploadImage form={form} name="image" />
          </FieldInput>

          <FieldInput
            title="Company Details"
            subtitle="Introduce your company core info quickly to users by fill up this form"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full md:w-4/5"
                        placeholder="Company Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full md:w-4/5"
                        placeholder="Url Website"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full md:w-4/5">
                          <SelectValue placeholder="Select company location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LOCATION_OPTIONS.map((item: string, i: number) => (
                          <SelectItem key={item + i} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full md:w-4/5 grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Employee in this company" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map((item: string, i: number) => (
                            <SelectItem key={item + i} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* {LOCATION.map((item) => (
                            <SelectItem key={item.id} value={item.name}>
                              {item.name}
                            </SelectItem>
                          ))} */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="detaFound"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Found</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full md:w-4/5 pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <InputSkill form={form} name="techStack" label="Tech Stack" />
            </div>
          </FieldInput>

          <FieldInput
            title="About company"
            subtitle="Brief description of your company"
          >
            <CKEditor
              form={form}
              name="description"
              editorloaded={editorloaded}
            />
          </FieldInput>
          <div className="flex justify-end">
            <Button size={"lg"} type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
