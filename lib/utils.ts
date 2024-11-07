import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const technicalSkills = [
  {
    name: "Frontend",
    value: "HTML/CSS/Tailwind, Next.js, React, JavaScript/TypeScript, Zustand, Chadcnui, Material UI (MUI)",
  },
  {
    name: "Mobile",
    value: "React Native, Expo, Nativewind, JavaScript/TypeScript, Zustand",
  },
  {
    name: "Backend",
    value: "Node.js, JavaScript/TypeScript, Go, Python, Postgresql, Mysql, Redis",
  },
  {
    name: "Other",
    value: "HTTP/REST API, Websockets, AWS",
  },
]
