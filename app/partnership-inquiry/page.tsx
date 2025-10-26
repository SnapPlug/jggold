"use client";

import { Container, Section } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import Image from "next/image";

export default function PartnershipInquiry() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F8F8F6' }}>
      {/* 네비게이션바 */}
      <Navbar />
      
      {/* Partnership Inquiry 히어로 섹션 */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src="/1. Partnership Inquiry_Home.png"
          alt="Partnership Inquiry Hero Background"
          fill
          className="object-cover object-center"
        />
        
        {/* 오버레이 텍스트 */}
        <div className="absolute inset-0 flex items-end justify-start">
          <div className="pl-3 md:pl-[97px] pb-[66px]">
            <p className="text-[1.5rem] leading-[1.4em] text-white font-inter">
              JG Gold Company와 함께 성장할 파트너를 찾고 있습니다.
              <br />
              대체커피 시장의 새로운 가능성을 함께 만들어가요.
            </p>
          </div>
        </div>
      </div>
      
      {/* Partnership Benefit 섹션 */}
      <div className="w-full py-16" style={{ backgroundColor: '#F8F8F6' }}>
        <div className="max-w-full mx-auto px-3 md:px-8">

          <h2 className="text-[1.9rem] leading-[0.9em] mb-16 text-center" style={{ color: '#121212' }}>
            Partnership Benefit
          </h2>
          
          {/* Partnership Benefit 이미지 그리드 */}
          <div className="grid grid-cols-3 gap-3 justify-center place-items-center">
            {/* 첫 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200" style={{ width: '393px', height: '500px' }}>
              <Image
                src="/partership_1.png"
                alt="Partnership Benefit 1"
                width={393}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">품질 보증</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">130개 브랜드 리서치와 42종 시음을 통해 검증된<br />최고 품질의 제품을 안정적으로 공급받을 수 있습니다.</p>
                </div>
              </div>
            </div>
            
            {/* 두 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200" style={{ width: '393px', height: '500px' }}>
              <Image
                src="/partership_2.png"
                alt="Partnership Benefit 2"
                width={393}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">글로벌 네트워크</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">8개국에서의 직수입 경험과 32개 글로벌 파트너와의<br />협력을 통해 해외 시장 진출을 지원합니다.</p>
                </div>
              </div>
            </div>
            
            {/* 세 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200" style={{ width: '393px', height: '500px' }}>
              <Image
                src="/partership_3.png"
                alt="Partnership Benefit 3"
                width={393}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">맞춤형 지원</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">파트너의 사업 규모와 목표에 맞는<br />맞춤형 비즈니스 모델과 마케팅 전략을 제안합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 파트너십 문의 폼 섹션 */}
      <div className="w-full py-16" style={{ backgroundColor: '#F8F8F6' }}>
        <div className="max-w-full mx-auto px-3 md:px-8">
          <h2 className="text-[1.9rem] leading-[0.9em] mb-16 text-center" style={{ color: '#121212' }}>
            Partnership Inquiry
          </h2>
          
          <form className="max-w-4xl mx-auto space-y-6">
            {/* 상단 2열 섹션 */}
            <div className="grid grid-cols-2 gap-6">
              {/* 회사명 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">회사명</label>
                <input
                  type="text"
                  placeholder="회사명을 입력해주세요"
                  className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                />
              </div>
              
              {/* 대표자명 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">대표자명</label>
                <input
                  type="text"
                  placeholder="대표자명을 입력해주세요"
                  className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                />
              </div>
            </div>
            
            {/* 두 번째 2열 섹션 */}
            <div className="grid grid-cols-2 gap-6">
              {/* 이메일 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">이메일</label>
                <input
                  type="email"
                  defaultValue="jggoldcompany@jggoldcompany.com"
                  className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                />
              </div>
              
              {/* 전화번호 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">전화번호</label>
                <input
                  type="tel"
                  placeholder="전화번호를 입력해주세요"
                  className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                />
              </div>
            </div>
            
            {/* 세 번째 2열 섹션 */}
            <div className="grid grid-cols-2 gap-6">
              {/* 사업자등록번호 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">사업자등록번호</label>
                <input
                  type="text"
                  defaultValue="000-00-00000"
                  className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                />
              </div>
              
              {/* 업종 */}
              <div>
                <label className="block text-[1rem] leading-[1.2] font-inter mb-2">업종</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 pr-10 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                    defaultValue=""
                  >
                    <option value="" disabled>업종을 선택해주세요</option>
                    <option value="coffee">커피/음료</option>
                    <option value="food">식품/식재료</option>
                    <option value="distribution">유통/도매</option>
                    <option value="cafe">카페/음식점</option>
                    <option value="other">기타</option>
                  </select>
                  {/* 커스텀 드롭다운 아이콘 */}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* 회사 주소 */}
            <div>
              <label className="block text-[1rem] leading-[1.2] font-inter mb-2">회사 주소</label>
              <input
                type="text"
                placeholder="회사 주소를 입력해주세요"
                className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
              />
            </div>
            
            {/* 현재 취급 제품 */}
            <div>
              <label className="block text-[1rem] leading-[1.2] font-inter mb-2">현재 취급 제품</label>
              <textarea
                placeholder="현재 취급하고 있는 제품들을 입력해주세요"
                rows={4}
                className="w-full p-3 border-0 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
              />
            </div>
            
            {/* 주요 타겟 시장 */}
            <div>
              <label className="block text-[1rem] leading-[1.2] font-inter mb-2">주요 타겟 시장</label>
              <input
                type="text"
                placeholder="주요 타겟 시장을 입력해주세요"
                className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
              />
            </div>
            
            {/* 파트너십 관심 분야 */}
            <div>
              <label className="block text-[1rem] leading-[1.2] font-inter mb-2">파트너십 관심 분야</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-10 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                  defaultValue=""
                >
                  <option value="" disabled>관심 분야를 선택해주세요</option>
                  <option value="product_supply">제품 공급</option>
                  <option value="distribution">유통 파트너십</option>
                  <option value="brand_collaboration">브랜드 협업</option>
                  <option value="technical_cooperation">기술 협력</option>
                  <option value="overseas_entry">해외 진출</option>
                  <option value="other">기타</option>
                </select>
                {/* 커스텀 드롭다운 아이콘 */}
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* 추가 문의사항 */}
            <div>
              <label className="block text-[1rem] leading-[1.2] font-inter mb-2">추가 문의사항</label>
              <textarea
                placeholder="추가로 문의하실 사항이 있다면 입력해주세요"
                rows={4}
                className="w-full p-3 border-0 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
              />
            </div>
            
            {/* 제출 버튼 */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center"
                style={{ 
                  width: '240px', 
                  height: '40px', 
                  backgroundColor: '#443F36', 
                  padding: '12px 96px',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#A2AD71'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#443F36'}
              >
                    Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 비디오 섹션 */}
      <div className="w-full h-[675px] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        >
          <source src="/Partership_video.mp4" type="video/mp4" />
        </video>
      </div>
          
      {/* Footer 섹션 */}
      <AnimatedFooter />
    </div>
  );
}
