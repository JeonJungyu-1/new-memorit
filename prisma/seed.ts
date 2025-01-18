import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function main() {
  try {
    // 기존 데이터 삭제
    await prisma.tag.deleteMany();
    await prisma.memory.deleteMany();
    await prisma.friend.deleteMany();
    await prisma.user.deleteMany();

    // 테스트 사용자 생성
    const user1 = await prisma.user.create({
      data: {
        email: "user1@example.com",
        name: "김철수",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: "user2@example.com",
        name: "이영희",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2",
      },
    });

    // 친구 관계 생성 (단방향)
    await prisma.friend.create({
      data: {
        userId: user1.id,
        friendId: user2.id,
        memo: "고등학교 동창",
      },
    });

    // 태그 생성
    const tag1 = await prisma.tag.create({
      data: { name: "여행" },
    });

    const tag2 = await prisma.tag.create({
      data: { name: "일상" },
    });

    // 기억 생성
    await prisma.memory.create({
      data: {
        title: "제주도 여행",
        content: "친구들과 함께한 제주도 여행. 정말 즐거웠다!",
        imageUrl: "https://example.com/jeju.jpg",
        isPublic: true,
        authorId: user1.id,
        tags: {
          connect: [{ id: tag1.id }],
        },
        sharedWith: {
          connect: [{ id: user2.id }],
        },
      },
    });

    console.log("Seed data created successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export {};
