"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * 네비게이션바 컴포넌트
 * - 투명한 배경 (초기 상태)
 * - 왼쪽에 JG_Logo.png 로고
 * - 데스크톱: 오른쪽에 메뉴 항목들
 * - 모바일: MENU 버튼으로 변경, 클릭 시 전체 화면 메뉴 표시
 * - 스크롤 시 플로팅 상태로 변경
 * - 반응형 디자인 적용
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 열림/닫힘 시 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "About", href: "/about", number: "01" },
    { label: "Partners", href: "/partners", number: "02" },
    { label: "Products", href: "/products", number: "03" },
    { label: "Contact", href: "/contact", number: "04" },
    { label: "Partnership Inquiry", href: "/partnership-inquiry", number: "05" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Thread", href: "#" },
  ];

  return (
    <>
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
              : "w-full max-w-content px-3 mobile:px-3 tablet:px-10 desktop:px-[30px] desktop:py-[30px] h-[77px] justify-between"
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

          {/* 데스크톱 메뉴 영역 */}
          <div className="hidden md:flex items-center space-x-[20px]">
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

          {/* 모바일 MENU 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white font-medium text-[12px] transition-all duration-300 hover:text-gray-300"
          >
            MENU
          </button>
        </div>
      </nav>

      {/* 모바일 전체 화면 메뉴 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black">
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between px-3 py-6">
            <div className="flex items-center">
              <Image
                src="/JG_Logo.png"
                alt="JG Logo"
                width={120}
                height={30}
                priority
                className="h-[30px] w-[120px] object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white font-medium text-[12px] transition-all duration-300 hover:text-gray-300"
            >
              CLOSE
            </button>
          </div>

          {/* 메인 메뉴 항목들 */}
          <div className="px-3 pt-8">
            {menuItems.map((item, index) => (
              <div key={item.label} className="py-[25px]">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-white text-[1.5rem] font-medium transition-all duration-300 hover:text-gray-300"
                >
                  <span>{item.label}</span>
                  <span className="text-[#F8F8F6] text-[1.5rem]">{item.number}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* 하단 소셜 미디어 링크 */}
          <div className="absolute bottom-8 left-3">
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="block text-white text-[1rem] font-medium transition-all duration-300 hover:text-gray-300"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
