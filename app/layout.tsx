import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jggoldcompany.com'),
  title: "JG Gold | 카페인 없는 커피, 대체커피 전문 프랑스 브랜드",
  description: "카페인 프리, 디카페인, 루핀커피, 치커리커피 등 다양한 대체커피를 제공하는 프랑스 유럽 브랜드. 무카페인 건강음료와 웰니스음료로 카페인 민감자에게 안전한 커피 대안을 제시합니다.",
  keywords: [
    "대체커피",
    "카페인 프리",
    "디카페인",
    "카페인 없는 커피",
    "루핀커피",
    "치커리커피",
    "프랑스 브랜드",
    "유럽 브랜드",
    "무카페인",
    "브랜드 협업",
    "건강 음료",
    "웰니스 음료",
    "카페인 민감자",
    "JG Gold",
    "대체음료",
  ],
  openGraph: {
    title: "JG Gold | 카페인 없는 커피, 대체커피 전문 프랑스 브랜드",
    description: "카페인 프리, 디카페인, 루핀커피, 치커리커피 등 다양한 대체커피를 제공하는 프랑스 유럽 브랜드.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "JG Gold | 카페인 없는 커피, 대체커피 전문 프랑스 브랜드",
    description: "카페인 프리, 디카페인, 루핀커피, 치커리커피 등 다양한 대체커피를 제공하는 프랑스 유럽 브랜드.",
  },
  icons: {
    icon: "/farvicon.png",
    shortcut: "/farvicon.png",
    apple: "/farvicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
