import jobListingType from "@/types/jobListing";
import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
];

export const JOB_LISTINGS_COLUMNS: string[] = [
  "Role",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTINGS_DATA: jobListingType[] = [
  {
    id: 1,
    role: "Frontend Developer",
    status: "Live",
    datePosted: "Dec 12, 2022",
    dueDate: "Nov 12, 2022",
    jobType: "Full-Time",
    applicants: "2",
    needs: "5",
  },
];
