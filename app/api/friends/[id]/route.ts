import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { IFriendDetail } from "@/types";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const friend = await prisma.friend.findUnique({
      where: {
        id: id,
        userId: session.user.id,
      },
      select: {
        id: true,
        friendId: true,
        memo: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        user: true,
      },
    });

    if (!friend) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // Date 객체를 ISO 문자열로 변환
    const friendWithFormattedDate: IFriendDetail = {
      ...friend,
    };

    return NextResponse.json(friendWithFormattedDate);
  } catch (error) {
    console.error("친구 정보 조회 중 오류 발생:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
