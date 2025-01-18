import { IFriend } from "@/types";

/**
 * ID로 친구 정보를 조회하는 함수
 * @param id 친구 ID
 * @returns Promise<IFriend | null> 친구 정보 또는 null
 */
export async function getFriendById(id: string): Promise<IFriend | null> {
  try {
    // TODO: 실제 API 호출 또는 데이터베이스 쿼리로 대체
    const response = await fetch(`/api/friends/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("친구 정보를 가져오는데 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("친구 정보 조회 중 오류 발생:", error);
    throw error;
  }
}
