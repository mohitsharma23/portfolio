import {
  RiAngularjsLine,
  RiReactjsLine,
  RiJavascriptLine,
  RiNextjsLine,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { SiGraphql, SiTypescript } from "react-icons/si";

export const TECH_STACK = [
  { icon: RiJavascriptLine, name: "Javscript" },
  { icon: RiAngularjsLine, name: "Angular" },
  { icon: RiReactjsLine, name: "React" },
  { icon: RiNextjsLine, name: "Next" },
  { icon: SiGraphql, name: "Graphql" },
  { icon: SiTypescript, name: "Typescript" },
];

export const EXPERIENCE = [
  {
    company: "Soroco",
    link: "https://soroco.com",
    location: "Bengaluru",
    position: "Senior Software Engineer",
    startDate: "Jan 2024",
    endDate: "Present",
  },
  {
    company: "Soroco",
    link: "https://soroco.com",
    location: "Bengaluru",
    position: "Software Engineer",
    startDate: "Oct 2020",
    endDate: "Dec 2023",
  },
  {
    company: "Accenture",
    link: "https://accenture.com",
    location: "Mumbai",
    position: "Associate Software Engineer",
    startDate: "Jun 2019",
    endDate: "Oct 2020",
  },
  {
    company: "Youstart Labs",
    link: "https://youstart.in",
    location: "Jaipur",
    position: "Intern",
    startDate: "Jan 2019",
    endDate: "May 2019",
  },
];

export const LINKS = [
  {
    name: "Github",
    icon: RiGithubFill,
    link: "https://github.com/mohitsharma23/",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinFill,
    link: "https://www.linkedin.com/in/mohit-sharma-23j97/",
  },
];
