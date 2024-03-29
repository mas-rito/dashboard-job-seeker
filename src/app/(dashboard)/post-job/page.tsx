"use client";
import { TitleForm } from "@/components/atoms/TitleForm";
import CKEditor from "@/components/oraganisms/CKEditor";
import { FieldInput } from "@/components/oraganisms/FieldInput";
import InputBenefits from "@/components/oraganisms/InputBenefits";
import InputSkill from "@/components/oraganisms/InputSkill";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { JOBTYPES } from "@/constants";
import postJobSchema from "@/lib/formSchemas/postJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { z } from "zod";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { CategoryJob } from "@prisma/client";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
export default function PostJobPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const { data, error, isLoading } = useSWR<CategoryJob[]>(
    "api/job/categories",
    fetcher
  );
  const [editorloaded, setEditorloaded] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof postJobSchema>>({
    resolver: zodResolver(postJobSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const handleSubmit = async (values: z.infer<typeof postJobSchema>) => {
    try {
      const body = {
        roles: values.roles,
        jobType: values.jobType,
        applicants: 0,
        needs: 20,
        benefits: values.benefits,
        salaryFrom: values.salaryFrom,
        salaryTo: values.salaryTo,
        description: values.jobDescription,
        requiredSkills: values.requiredSkills,
        categoryId: values.categoryId,
        responsibility: values.responsibility,
        whoYouAre: values.whoYouAre,
        niceToHave: values.niceToHave,
        datePosted: moment().toDate(),
        dueDate: moment().add(30, "days").toDate(),
        companyId: session?.user.id,
      };

      await fetch("/api/job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.ok) {
          router.push("/job-listings");
          toast({
            title: "Success",
            description: "Job created successfully",
          });
        } else {
          toast({
            title: "Error",
            description: "Something went wrong, please try again",
            variant: "destructive",
          });
        }
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

  React.useEffect(() => {
    setEditorloaded(true);
  }, []);

  return (
    <div>
      <Link
        href={"/"}
        className="inline-flex items-center gap-x-2 hover:text-primary"
      >
        <FiArrowLeft />
        <h1 className="text-xl font-semibold">Back</h1>
      </Link>

      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="List out your yop perks and benefits."
        />
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-6 space-y-6 pt-6"
        >
          <FieldInput title="Job Title" subtitle="Enter your job title">
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full md:w-4/5"
                      placeholder="e.g. Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 3 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary"
          >
            <div className="w-4/5 flex felx-row justify-between items-center gap-x-4">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <span>to</span>

              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="$1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Job Categories"
            subtitle="Select your job category"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full md:w-4/5">
                        <SelectValue placeholder="Select Job Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.map((item: CategoryJob) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Required Skills"
            subtitle="Add required skills for the job"
          >
            <InputSkill form={form} name="requiredSkills" label="Add Skill" />
          </FieldInput>

          <FieldInput title="Job Description" subtitle="Describe your job">
            <CKEditor
              form={form}
              name="jobDescription"
              editorloaded={editorloaded}
            />
          </FieldInput>
          <FieldInput
            title="Responsibilities"
            subtitle="Outline the core responsibilities of the possible candidates"
          >
            <CKEditor
              form={form}
              name="responsibility"
              editorloaded={editorloaded}
            />
          </FieldInput>
          <FieldInput
            title="Who you are"
            subtitle="Add your preferred candidates qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorloaded={editorloaded}
            />
          </FieldInput>
          <FieldInput
            title="Nice-To-Have"
            subtitle="Add niceto-have qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHave"
              editorloaded={editorloaded}
            />
          </FieldInput>

          <FieldInput
            title="Perks and Benefits"
            subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer you offer your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Do a Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
