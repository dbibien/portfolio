import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const technicalSkills = [
  {
    name: "Frontend",
    value: "HTML/CSS/Tailwind, Next.js, React, JavaScript/TypeScript, Zustand, React Testing Library, Jest, Chadcnui, Material UI (MUI)",
  },
  {
    name: "Mobile",
    value: "React Native, Expo, Nativewind, JavaScript/TypeScript, Zustand, React Native Testing Library, Jest",
  },
  {
    name: "Backend",
    value: "Node.js, Express, JavaScript/TypeScript, Go, Python, Gofiber, Echo, Django, PocketBase, Postgresql, Mysql, Redis",
  },
  {
    name: "Other",
    value: "HTTP/REST API, Websockets, AWS/S3, Git, Github, CI/CD, Unit Testing, Jira",
  },
]
