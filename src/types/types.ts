export type ColorsTypes = {
  primaryColor: string;
  secondaryColor: string;
};

export type SocialLink = {
  id: string;
  label: string;
  icon: React.ReactNode;
  link: string;
};

type Skills = {
  name: string;
  color: "red" | "yellow" | "blue" | "green";
};

export type Experience = {
  title: string;
  description: string;
  date: string;
  skills: Skills[];
};

export type MyResume = {
  name: string;
  work: string;
  resumeList: string[];
  experiences: Experience[];
};
