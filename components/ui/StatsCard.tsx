interface IStatsCardProps {
  userCount: number;
  memoryCount: number;
}

export function StatsCard({ userCount, memoryCount }: IStatsCardProps) {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex-1 flex items-center justify-center -mt-32">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-2xl font-medium">지금까지</h2>
          <p className="text-4xl font-bold">
            <span className="text-blue-500">{userCount}</span>명과{" "}
            <span className="text-blue-500">{memoryCount}</span>번의
          </p>
          <p className="text-4xl font-bold">기억을 나눴어요.</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2 mb-36">
        <p className="text-lg text-gray-600">전체 히스토리 보기</p>
        <svg
          className="w-6 h-6 text-gray-600 animate-bounce"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
