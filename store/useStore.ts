import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

/**
 * 전역 상태 인터페이스 정의
 */
interface IStore {
  // 예시 상태
  count: number;
  // 예시 액션
  increment: () => void;
  decrement: () => void;
}

/**
 * Zustand store 생성
 * persist: 상태를 로컬 스토리지에 저장
 * devtools: Redux DevTools 연동
 */
export const useStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      {
        name: "app-storage", // 로컬 스토리지 키 이름
      }
    )
  )
);
