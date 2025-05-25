import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { IUser } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (session) {
      // 이미 로그인된 경우
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      return NextResponse.json(user, { status: 200 });
    }

    const body = await request.json();
    const { email, password } = body;

    // 사용자 인증 로직 (예: 비밀번호 확인)
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      // 이미 존재하는 사용자
      return NextResponse.json(existingUser, { status: 200 });
    }

    // 새로운 사용자 생성
    const newUser: IUser = await prisma.user.create({
      data: {
        email,
        password, // 비밀번호는 해시 처리 후 저장하는 것이 좋습니다.
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
