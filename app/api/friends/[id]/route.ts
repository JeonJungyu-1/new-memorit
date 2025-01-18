import prisma from "@/lib/prisma";
import { IFriendDetail } from "@/types";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const friend = await prisma.friend.findUnique({
      where: {
        id: params.id,
        userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        birthDate: true,
        address: true,
        memo: true,
        createdAt: true,
        status: true,
        type: true,
        category: true,
        receivedCount: true,
        sentCount: true,
      },
    });

    if (!friend) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // Date 객체를 ISO 문자열로 변환
    const friendWithFormattedDate: IFriendDetail = {
      ...friend,
      createdAt: friend.createdAt.toISOString(),
      birthDate: friend.birthDate?.toISOString(),
    };

    return NextResponse.json(friendWithFormattedDate);
  } catch (error) {
    console.error("친구 정보 조회 중 오류 발생:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
