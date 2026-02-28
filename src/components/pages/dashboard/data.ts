export interface OverviewCard {
  title: string;
  value: string;
  note: string;
  primary: boolean;
}

export interface ProjectItem {
  title: string;
  date: string;
  color: string;
}

export interface Collaborator {
  name: string;
  task: string;
  status: "Completed" | "In Progress" | "Pending";
  tone: "done" | "progress" | "pending";
}

export interface WeekBar {
  day: string;
  fill: number;
  stripe: boolean;
  color?: string;
  active?: boolean;
  topText?: string;
}

// Shared source of truth used by dashboard and all feature routes.
export const overviewCards: OverviewCard[] = [
  {
    title: "Total Projects",
    value: "24",
    note: "Increased from last month",
    primary: true,
  },
  {
    title: "Ended Projects",
    value: "10",
    note: "Increased from last month",
    primary: false,
  },
  {
    title: "Running Projects",
    value: "12",
    note: "Increased from last month",
    primary: false,
  },
  {
    title: "Pending Project",
    value: "2",
    note: "On Discuss",
    primary: false,
  },
];

export const projectList: ProjectItem[] = [
  {
    title: "Develop API Endpoints",
    date: "Due date: Nov 26, 2024",
    color: "#2445ff",
  },
  {
    title: "Onboarding Flow",
    date: "Due date: Nov 28, 2024",
    color: "#2f9c95",
  },
  {
    title: "Build Dashboard",
    date: "Due date: Nov 30, 2024",
    color: "#98bb38",
  },
  {
    title: "Optimize Page Load",
    date: "Due date: Dec 6, 2024",
    color: "#f7ba2c",
  },
  {
    title: "Cross-Browser Testing",
    date: "Due date: Dec 6, 2024",
    color: "#f28623",
  },
];

export const collaborators: Collaborator[] = [
  {
    name: "Alexandra Deff",
    task: "Github Project Repository",
    status: "Completed",
    tone: "done",
  },
  {
    name: "Edwin Adenike",
    task: "Integrate User Authentication System",
    status: "In Progress",
    tone: "progress",
  },
  {
    name: "Isaac Oluwatemilorun",
    task: "Develop Search and Filter Functionality",
    status: "Pending",
    tone: "pending",
  },
  {
    name: "David Oshodi",
    task: "Responsive Layout for Homepage",
    status: "In Progress",
    tone: "progress",
  },
];

export const weekBars: WeekBar[] =[
  { day: "S", fill: 85, stripe: false, color: "#3a7d5c" },
  { day: "M", fill: 100, stripe: false, color: "#2d6b4a" },
  { day: "T", fill: 74, stripe: false, color: "#6dcfa0", topText: "74%", active: true },
  { day: "W", fill: 100, stripe: false, color: "#1a4d32" },
  { day: "T", fill: 0, stripe: true },
  { day: "F", fill: 0, stripe: true },
  { day: "S", fill: 0, stripe: true },
];

export const meetingReminder = {
  title: "Meeting with Arc Company",
  time: "Time : 02.00 pm - 04.00 pm",
};
