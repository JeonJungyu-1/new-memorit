import { IFriend } from "@/types";
import Link from 'next/link'

interface IFriendCardProps {
  friend: IFriend;
}

export function FriendCard({ friend }: IFriendCardProps) {
  return (
    <Link href={`/friends/${friend.id}`} className="block w-full">
      <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-medium mb-1">{friend.name}</h3>
          {friend.category && (
            <span className="text-sm text-gray-500 mb-2">{friend.category}</span>
          )}
          <div className="flex gap-3 text-sm text-gray-600">
            <span>받은 기억 {friend.receivedCount || 0}</span>
            <span>보낸 기억 {friend.sentCount || 0}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
