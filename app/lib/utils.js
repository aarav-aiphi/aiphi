import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally and removes duplicates.
 * @param  {...any} inputs - Class names or conditionals.
 * @returns {string} - Merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
