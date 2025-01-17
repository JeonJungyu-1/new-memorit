import { type ClassValue, clsx } from "clsx";
import ms from "ms";
import { twMerge } from "tailwind-merge";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

/**
 * Tailwind CSS 클래스를 조건부로 결합하는 유틸리티 함수
 * clsx로 클래스를 결합하고, tailwind-merge로 중복된 스타일을 처리합니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
