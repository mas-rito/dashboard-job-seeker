import jobApplicantType from "@/types/jobApplicants";
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

export const JOB_APPLICANTS_COLUMNS: string[] = ["Name", "Date Applied"];

export const JOB_APPLICANTS_DATA: jobApplicantType[] = [
  {
    id: 1,
    name: "John Doe",
    dateApplied: "Dec 12, 2022",
  },
  {
    id: 2,
    name: "Ryan Doe",
    dateApplied: "Dec 12, 2022",
  },
];
