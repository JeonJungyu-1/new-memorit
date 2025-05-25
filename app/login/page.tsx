"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleLogin = () => {
    signIn();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl">로그인 페이지</h1>
      <button
        onClick={handleLogin}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        간편 로그인
      </button>
      {/* 로그인 폼 추가 예정 */}
    </div>
  );
};

export default LoginPage;
