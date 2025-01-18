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

export type FriendCategory = "all" | "family" | "school" | "work";
export type FriendStatus = "online" | "offline";
export type FriendType = "friend" | "pending" | "blocked";

export interface IFriend {
  id: string;
  name: string;
  status: "online" | "offline";
  type: "friend" | "blocked";
  category?: FriendCategory;
  receivedCount?: number;
  sentCount?: number;
  email?: string;
  phoneNumber?: string;
  birthDate?: string;
  address?: string;
  memo?: string;
  createdAt: string | Date;
}

export interface IFriendCategory {
  value: string;
  label: string;
}

export interface IAddFriendForm {
  name: string;
  category: string;
}

export interface IAddFriendModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface IFriendListProps {
  category?: FriendCategory;
}

export interface IFriendDetail {
  id: string;
  friendId: string;
  memo: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: IUser;
}

export interface IUser {
  name: string;
  id: string;
  email: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMemoryCreate {
  title: string;
  content: string;
  imageUrl?: string;
  isPublic: boolean;
  tags?: {
    id?: string;
    name: string;
  }[];
  sharedWithUserIds?: string[];
}

export interface IMemory {
  id: string;
  authorId: string;
  title: string;
  content: string;
  imageUrl?: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
  sharedWith: {
    id: string;
    name: string;
    email: string;
    image?: string;
  }[];
}
