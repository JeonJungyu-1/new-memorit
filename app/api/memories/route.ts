import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: 데이터베이스에 저장하는 로직 구현
    // 현재는 임시로 성공 응답만 반환

    return NextResponse.json({ message: "기억이 성공적으로 추가되었습니다." });
  } catch (error) {
    return NextResponse.json(
      { error: "기억을 추가하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
