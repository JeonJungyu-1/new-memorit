"use client";

import AddFriendModal from "@/components/friends/AddFriendModal";
import FriendList from "@/components/friends/FriendList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

export default function FriendsPage() {
  // 모달 상태 관리를 위한 state
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  return (
    <main className="container max-w-xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">친구 목록</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsAddFriendOpen(true)}
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">
            전체
          </TabsTrigger>
          <TabsTrigger value="work" className="flex-1">
            직장
          </TabsTrigger>
          <TabsTrigger value="school" className="flex-1">
            학교
          </TabsTrigger>
          <TabsTrigger value="family" className="flex-1">
            가족
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <FriendList type="friend" category="all" />
        </TabsContent>
        <TabsContent value="work">
          <FriendList type="friend" category="work" />
        </TabsContent>
        <TabsContent value="school">
          <FriendList type="friend" category="school" />
        </TabsContent>
        <TabsContent value="family">
          <FriendList type="friend" category="family" />
        </TabsContent>
      </Tabs>

      <AddFriendModal
        open={isAddFriendOpen}
        onOpenChange={setIsAddFriendOpen}
      />
    </main>
  );
}
