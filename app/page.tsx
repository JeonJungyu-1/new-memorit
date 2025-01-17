import { History } from "@/components/ui/History";
import { StatsCard } from "@/components/ui/StatsCard";
import { IHistoryItem } from "@/types";

const mockHistoryItems: IHistoryItem[] = [
  {
    type: "결혼",
    amount: 100000,
    date: "2023-10-14",
    name: "홍길동",
    isReceived: false,
  },
  {
    type: "출산",
    amount: 100000,
    date: "2023-10-11",
    name: "김철수",
    isReceived: true,
  },
  {
    type: "돌잔치",
    amount: 50000,
    date: "2023-10-06",
    name: "이영희",
    isReceived: false,
  },
  {
    type: "장례",
    amount: 30000,
    date: "2023-10-05",
    name: "박지민",
    isReceived: true,
  },
  {
    type: "생일",
    amount: 10000,
    date: "2023-10-05",
    name: "최수진",
    isReceived: false,
  },
  {
    type: "기타",
    amount: 40000,
    date: "2023-10-05",
    name: "정민수",
    isReceived: true,
  },
];

export default function Home() {
  return (
    <div className="space-y-4">
      <StatsCard userCount={100} memoryCount={1000} />
      <History items={mockHistoryItems} />
    </div>
  );
}
