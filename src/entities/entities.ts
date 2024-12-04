/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'admin' | 'seller' | 'hr';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "employees".
 */
export interface Employee {
  id: number;
  name: string;
  position: string;
  email: string;
  telephone: string;
  image: Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: number;
  title: string;
  content: {
    [k: string]: unknown;
  }[];
  description: string;
  preview: Media;
  newsGroups: NewsGroup;
  isArchive?: boolean | null;
  author?: User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "newsGroups".
 */
export interface NewsGroup {
  id: number;
  name: string;
  description: string;
  groupTagColor?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "departments".
 */
export interface Team{
  teamName: string;
  description?: string | null;
  members?:{
            member: Employee;
            id?: string | null;
          }[];
  id?: string | null;
}

export interface Department {
  id: number;
  name: string;
  teams?:Team[]| null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobs".
 */
export interface Job {
  id: number;
  jobTitle: string;
  jobDescription: string;
  workSchedule: 'Full-Time' | 'Part-Time' | 'Remote' | 'Flexible';
  location: string;
  jobGroup: JobGroup;
  content: {
    [k: string]: unknown;
  }[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobGroups".
 */
export interface JobGroup {
  id: number;
  name: string;
  description: string;
  icon?: Icon;
  groupTagColor?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: number;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "job-responses".
 */
export interface JobResponse {
  id: number;
  lastName: string;
  firstName: string;
  phone: string;
  resume: Media;
  job: Job;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news-responses".
 */
export interface NewsResponse {
  id: number;
  email: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home".
 */
export interface Home {
  id: number;
  team: Employee[];
  jobgroups: JobGroup[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}