import { IFriend } from "@/types";
import FriendCard from "./FriendCard";

interface IFriendListProps {
  type: "all" | "mutual" | "sent" | "others";
}

export default function FriendList({ type }: IFriendListProps) {
  // 실제로는 API에서 데이터를 가져와야 합니다
  const mockFriends: IFriend[] = [
    {
      id: "1",
      name: "Hee Melby",
      status: "online",
      favoriteCount: 0,
    },
    {
      id: "2",
      name: "Lumina S",
      status: "offline",
      lastActive: new Date(),
      favoriteCount: 0,
    },
    // ... 더 많은 목업 데이터
  ];

  return (
    <div className="space-y-2 mt-4">
      {mockFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
