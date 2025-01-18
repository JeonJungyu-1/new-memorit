import { FriendCategory, IFriend } from "@/types";
import FriendCard from "./FriendCard";

interface IFriendListComponentProps {
  type: IFriend["type"];
  category?: FriendCategory;
}

export default function FriendList({
  type,
  category = "all",
}: IFriendListComponentProps) {
  // 실제로는 API에서 데이터를 가져와야 합니다
  const mockFriends: IFriend[] = [
    {
      id: "1",
      name: "김영희",
      status: "online",
      type: "friend",
      category: "work",
      receivedCount: 2,
      sentCount: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "이철수",
      status: "offline",
      type: "friend",
      category: "school",
      receivedCount: 1,
      sentCount: 3,
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      name: "박민지",
      status: "online",
      type: "friend",
      category: "family",
      receivedCount: 5,
      sentCount: 4,
      createdAt: new Date().toISOString(),
    },
    {
      id: "4",
      name: "정대리",
      status: "offline",
      type: "friend",
      category: "work",
      receivedCount: 0,
      sentCount: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: "5",
      name: "최과장",
      status: "online",
      type: "friend",
      category: "work",
      receivedCount: 2,
      sentCount: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: "6",
      name: "한동창",
      status: "offline",
      type: "friend",
      category: "school",
      receivedCount: 1,
      sentCount: 0,
      createdAt: new Date().toISOString(),
    },
  ];

  // 카테고리에 따라 친구 목록 필터링
  const filteredFriends =
    category === "all"
      ? mockFriends
      : mockFriends.filter((friend) => friend.category === category);

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {filteredFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
