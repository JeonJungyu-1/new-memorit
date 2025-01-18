"use client";

import { Home, Plus, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navigation = [
    {
      name: "홈",
      href: "/",
      icon: Home,
      current: pathname === "/",
    },
    {
      name: "기억추가",
      href: "/memory/add",
      icon: Plus,
      current: pathname === "/memory/add",
    },
    {
      name: "친구",
      href: "/friends",
      icon: Users,
      current: pathname === "/friends",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 ${
              item.current ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
