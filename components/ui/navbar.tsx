"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * 네비게이션바 컴포넌트
 * - 투명한 배경 (초기 상태)
 * - 왼쪽에 JG_Logo.png 로고
 * - 오른쪽에 메뉴 항목들
 * - 스크롤 시 플로팅 상태로 변경
 * - 반응형 디자인 적용
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Partnership Inquiry", href: "/partnership-inquiry" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 transition-all duration-700 ease-in-out",
        isScrolled 
          ? "w-[800px] h-[60px] left-1/2 transform -translate-x-1/2 mt-4 rounded-full bg-gray-800/85 backdrop-blur-[10px] shadow-lg px-[25px] py-[15px]" 
          : "w-full bg-transparent left-1/2 transform -translate-x-1/2"
      )}
    >
      <div 
        className={cn(
          "mx-auto flex items-center transition-all duration-700 ease-in-out",
          isScrolled
            ? "max-w-none justify-between"
            : "w-full max-w-content px-5 mobile:px-5 tablet:px-10 desktop:px-[30px] desktop:py-[30px] h-[77px] justify-between"
        )}
      >
        {/* 로고 영역 */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/JG_Logo.png"
              alt="JG Logo"
              width={120}
              height={30}
              priority
              className="h-[30px] w-[120px] object-contain"
            />
          </Link>
        </div>

        {/* 메뉴 영역 - 모든 화면 크기에서 표시 */}
        <div className="flex items-center space-x-[20px]">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-white transition-all duration-500 ease-in-out hover:text-gray-300 text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
