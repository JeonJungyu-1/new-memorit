import Link from "next/link";

/**
 * 심플한 헤더 컴포넌트
 * - 좌측 상단에 memorit 로고만 표시
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* memorit 로고 */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-foreground/80 transition-colors"
        >
          memorit
        </Link>
      </div>
    </header>
  );
}
