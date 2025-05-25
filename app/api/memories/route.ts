import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { IMemoryCreate } from "@/types";
import { NextResponse } from "next/server";

/**
 * 메모리 목록을 조회하는 GET 핸들러
 */
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "인증되지 않은 사용자입니다." },
        { status: 401 }
      );
    }

    const memories = await prisma.memory.findMany({
      where: {
        OR: [
          { authorId: session.user.id },
          { sharedWith: { some: { id: session.user.id } } },
          { isPublic: true },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
        sharedWith: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(memories);
  } catch (error) {
    console.error("메모리 목록 조회 중 오류 발생:", error);
    return NextResponse.json(
      { error: "메모리 목록을 불러오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

/**
 * 새로운 메모리를 생성하는 POST 핸들러
 */
export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "인증되지 않은 사용자입니다." },
        { status: 401 }
      );
    }

    const body: IMemoryCreate = await request.json();

    // 필수 필드 검증
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "제목과 내용은 필수 입력 항목입니다." },
        { status: 400 }
      );
    }

    // 태그 처리: 존재하지 않는 태그는 새로 생성
    const tags = body.tags
      ? await Promise.all(
          body.tags.map(async (tagName) => {
            return await prisma.tag.upsert({
              where: { name: tagName.name },
              update: {},
              create: { name: tagName.name },
            });
          })
        )
      : [];

    const memory = await prisma.memory.create({
      data: {
        title: body.title,
        content: body.content,
        imageUrl: body.imageUrl,
        isPublic: body.isPublic,
        authorId: session.user.id,
        tags: {
          connect: tags.map((tag) => ({ id: tag.id })),
        },
        sharedWith: body.sharedWithUserIds
          ? {
              connect: body.sharedWithUserIds.map((id) => ({ id })),
            }
          : undefined,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
        sharedWith: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(memory);
  } catch (error) {
    console.error("메모리 생성 중 오류 발생:", error);
    return NextResponse.json(
      { error: "메모리를 추가하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
