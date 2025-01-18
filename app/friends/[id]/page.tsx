import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFriendById } from "@/lib/api/friends";
import { notFound } from "next/navigation";

export default async function FriendDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const friend = await getFriendById(params.id);

  if (!friend) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{friend.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                이메일
              </h3>
              <p>{friend.email}</p>
            </div>
            {friend.phoneNumber && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  전화번호
                </h3>
                <p>{friend.phoneNumber}</p>
              </div>
            )}
            {friend.birthDate && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  생년월일
                </h3>
                <p>{friend.birthDate}</p>
              </div>
            )}
            {friend.address && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  주소
                </h3>
                <p>{friend.address}</p>
              </div>
            )}
          </div>
          {friend.memo && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                메모
              </h3>
              <p className="whitespace-pre-wrap">{friend.memo}</p>
            </div>
          )}
          <div className="text-sm text-muted-foreground mt-6">
            가입일: {new Date(friend.createdAt).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
