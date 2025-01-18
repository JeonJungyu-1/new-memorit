import { z } from "zod";

export interface IHistoryItem {
  type: "결혼" | "출산" | "돌잔치" | "장례" | "생일" | "기타";
  amount: number;
  date: string;
  name: string;
  isReceived: boolean;
}

export const memoryFormSchema = z.object({
  type: z.enum(["받은 기억", "보낸 기억"]),
  eventType: z.enum(["결혼", "출산", "돌잔치", "장례", "생일", "기타"]),
  date: z.date({
    required_error: "날짜를 선택해주세요.",
  }),
  amount: z.string().min(1, "금액을 입력해주세요."),
  description: z.string().min(1, "설명을 입력해주세요."),
});

export type IMemoryFormValues = z.infer<typeof memoryFormSchema>;

export interface IFriend {
  id: string;
  name: string;
  status: "online" | "offline";
  lastActive?: Date;
  favoriteCount: number;
}
