import FriendList from "@/components/friends/FriendList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Settings } from "lucide-react";

export default function FriendsPage() {
  return (
    <main className="container max-w-xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">친구 목록</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">
            광장
          </TabsTrigger>
          <TabsTrigger value="mutual" className="flex-1">
            호감
          </TabsTrigger>
          <TabsTrigger value="sent" className="flex-1">
            상점
          </TabsTrigger>
          <TabsTrigger value="others" className="flex-1">
            패키
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <FriendList type="all" />
        </TabsContent>
        <TabsContent value="mutual">
          <FriendList type="mutual" />
        </TabsContent>
        <TabsContent value="sent">
          <FriendList type="sent" />
        </TabsContent>
        <TabsContent value="others">
          <FriendList type="others" />
        </TabsContent>
      </Tabs>
    </main>
  );
}
