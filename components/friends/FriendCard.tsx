import { IFriend } from "@/types";
import { Card } from "../ui/card";

interface IFriendCardProps {
  friend: IFriend;
}

export default function FriendCard({ friend }: IFriendCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                friend.status === "online" ? "bg-green-500" : "bg-gray-400"
              }`}
            />
          </div>
          <div>
            <h3 className="font-medium">{friend.name}</h3>
            <p className="text-sm text-gray-500">
              {friend.status === "online" ? "온라인" : "오프라인"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            ♥ {friend.favoriteCount}
          </span>
        </div>
      </div>
    </Card>
  );
}
