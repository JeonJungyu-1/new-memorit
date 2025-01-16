/// <reference types="vitest" />
import "@testing-library/jest-dom";

/**
 * 테스트 실행 후 모든 모의(mock) 함수의 상태를 초기화합니다.
 */
afterEach(() => {
  vi.clearAllMocks();
});

/**
 * 모든 테스트가 완료된 후 모의(mock) 함수의 구현을 초기 상태로 되돌립니다.
 */
afterAll(() => {
  vi.resetAllMocks();
});

/**
 * window.matchMedia 폴리필 구현
 * Vitest 이슈 #821 해결을 위한 코드
 * @see https://github.com/vitest-dev/vitest/issues/821
 */
if (typeof globalThis !== "undefined") {
  Object.defineProperty(globalThis, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
