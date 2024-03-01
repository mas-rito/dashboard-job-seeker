import jobApplicantType from "@/types/jobApplicants";
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

export const LOCATION_OPTIONS: string[] = [
  "Indonesia",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
];

export const EMPLOYEE_OPTIONS: string[] = [
  "1-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];
