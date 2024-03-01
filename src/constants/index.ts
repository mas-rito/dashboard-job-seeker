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

export const JOB_APPLICANTS_COLUMNS: string[] = ["Name"];

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
