import { clsx, type ClassValue } from "clsx"
// i love tessa
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// i love tessa
