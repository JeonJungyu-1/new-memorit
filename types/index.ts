export interface IHistoryItem {
  type: "결혼" | "출산" | "돌잔치" | "장례" | "생일" | "기타";
  amount: number;
  date: string;
  name: string;
  isReceived: boolean;
}
