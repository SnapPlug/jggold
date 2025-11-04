"use client";

import { Container, Section } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export default function PartnershipInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Submitting form data:', formData);
      
      // 테이블명도 확인해보겠습니다
      console.log('Checking table access...');
      
      // 먼저 테이블 스키마를 확인해보겠습니다
      const { data: schemaData, error: schemaError } = await supabase
        .from('Inquiry')
        .select('*')
        .limit(1);
      
      console.log('Table schema check:', { schemaData, schemaError });
      
      // 만약 Inquiry 테이블에 접근할 수 없다면 다른 테이블명 시도
      if (schemaError) {
        console.log('Trying alternative table names...');
        
        // 다른 가능한 테이블명들 시도
        const alternativeTables = ['inquiry', 'partnership_inquiries', 'inquiries'];
        
        for (const tableName of alternativeTables) {
          const { data: altData, error: altError } = await supabase
            .from(tableName)
            .select('*')
            .limit(1);
          
          console.log(`Table ${tableName}:`, { altData, altError });
          
          if (!altError) {
            console.log(`Found working table: ${tableName}`);
            break;
          }
        }
      }
      
      // 실제 테이블 스키마에 맞는 컬럼명으로 데이터 삽입
      const { data, error } = await supabase
        .from('Inquiry')
        .insert([
          {
            'Name': formData.name,
            'Email': formData.email,
            'Phone': formData.phone,
            'More Inquiry': formData.inquiry
          }
        ]);

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error details:', error);
        throw new Error(`데이터베이스 오류: ${error.message}`);
      }

      setSubmitMessage('문의가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
      setSubmitMessage(`문의 제출 중 오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F8F8F6' }}>
      {/* 네비게이션바 */}
      <Navbar />
      
      {/* Partnership Inquiry 히어로 섹션 */}
      <div className="w-full h-[400px] md:h-[820px] relative overflow-hidden">
        <Image
          src="/1. Partnership Inquiry_Home.png"
          alt="Partnership Inquiry Hero Background"
          fill
          className="object-cover object-center"
        />
        
        {/* 오버레이 텍스트 */}
        <div className="absolute inset-0 flex items-end justify-between px-3 md:px-[97px] pb-[40px] md:pb-[66px]">
          {/* 왼쪽: 메시지 */}
          <div>
            <p className="text-[1.0rem] md:text-[28px] leading-[1.4em] text-white font-inter">
              JG Gold Company와 함께 성장할 파트너를 찾고 있습니다.
              <br />
              대체커피 시장의 새로운 가능성을 함께 만들어가요.
            </p>
          </div>
          
          {/* 오른쪽: 연락처 정보 */}
          <div className="hidden md:block text-white font-inter">
            <div className="space-y-2 text-[20px] leading-[1.4em]">
              <div>T +82 70-7633-9525</div>
              <div>E stacyjung@jggoldcompany.com</div>
              <div>F 0504-045-9525</div>
              <div className="max-w-[400px]">A 1404, 24, Simin-ro, Uijeongbu-si, Gyeonggi-do, Republic of Korea 11649</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partnership Benefit 섹션 */}
      <div className="w-full py-16 md:px-[80px] md:py-[120px]" style={{ backgroundColor: '#F8F8F6' }} >
        <div className="max-w-full mx-auto px-3 md:px-8">

          <h2 className="text-[1.2rem] md:text-[1.9rem] leading-[0.9em] mb-8 md:mb-16 text-center" style={{ color: '#121212' }}>
            Partnership Benefit
          </h2>
          
          {/* 모바일 Partnership Benefit 이미지 그리드 */}
          <div className="md:hidden grid grid-cols-1 gap-2 justify-center place-items-center">
            {/* 첫 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200 w-full max-w-[full]" style={{ height: '250px' }}>
              <Image
                src="/partership_1.png"
                alt="Partnership Benefit 1"
                width={300}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-[1.2rem] leading-[1.2em] text-white font-bold mb-[16px]">품질 보증</h3>
                  <p className="text-[0.8rem] leading-[1.2em] text-white">130개 브랜드 리서치와 42종 시음을 통해 검증된<br />최고 품질의 제품을 안정적으로 공급받을 수 있습니다.</p>
                </div>
              </div>
            </div>
            
            {/* 두 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200 w-full max-w-[full]" style={{ height: '250px' }}>
              <Image
                src="/partership_2.png"
                alt="Partnership Benefit 2"
                width={300}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-[1.2rem] leading-[1.2em] text-white font-bold mb-[16px]">글로벌 네트워크</h3>
                  <p className="text-[0.8rem] leading-[1.2em] text-white">8개국에서의 직수입 경험과 32개 글로벌 파트너와의<br />협력을 통해 해외 시장 진출을 지원합니다.</p>
                </div>
              </div>
            </div>
            
            {/* 세 번째 이미지 */}
            <div className="relative group cursor-pointer overflow-hidden bg-gray-200 w-full max-w-[full]" style={{ height: '250px' }}>
              <Image
                src="/partership_3.png"
                alt="Partnership Benefit 3"
                width={300}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-[1.2rem] leading-[1.2em] text-white font-bold mb-[16px]">맞춤형 지원</h3>
                  <p className="text-[0.8rem] leading-[1.2em] text-white">파트너의 사업 규모와 목표에 맞는<br />맞춤형 비즈니스 모델과 마케팅 전략을 제안합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 데스크톱 Partnership Benefit 이미지 그리드 */}
          <div className="hidden md:grid grid-cols-3 gap-4 justify-center mx-auto w-[1288px]">
            {/* 첫 번째 이미지 */}
            <div
              className="relative cursor-pointer overflow-hidden bg-gray-200 w-full h-[520px]"
              onMouseOver={() => setHoveredCard(0)}
              onMouseOut={() => setHoveredCard(null)}
            >
              <Image
                src="/partership_1.png"
                alt="Partnership Benefit 1"
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  hoveredCard === 0 ? "scale-105" : "scale-100"
                )}
                priority
                unoptimized
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300",
                  hoveredCard === 0 ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="text-white text-center">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">품질 보증</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">130개 브랜드 리서치와 42종 시음을 통해 검증된<br />최고 품질의 제품을 안정적으로 공급받을 수 있습니다.</p>
                </div>
              </div>
            </div>
            
            {/* 두 번째 이미지 */}
            <div
              className="relative cursor-pointer overflow-hidden bg-gray-200 w-full h-[520px]"
              onMouseOver={() => setHoveredCard(1)}
              onMouseOut={() => setHoveredCard(null)}
            >
              <Image
                src="/partership_2.png"
                alt="Partnership Benefit 2"
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  hoveredCard === 1 ? "scale-105" : "scale-100"
                )}
                priority
                unoptimized
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300",
                  hoveredCard === 1 ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="text-white text-center">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">글로벌 네트워크</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">8개국에서의 직수입 경험과 32개 글로벌 파트너와의<br />협력을 통해 해외 시장 진출을 지원합니다.</p>
                </div>
              </div>
            </div>
            
            {/* 세 번째 이미지 */}
            <div
              className="relative cursor-pointer overflow-hidden bg-gray-200 w-full h-[520px]"
              onMouseOver={() => setHoveredCard(2)}
              onMouseOut={() => setHoveredCard(null)}
            >
              <Image
                src="/partership_3.png"
                alt="Partnership Benefit 3"
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  hoveredCard === 2 ? "scale-105" : "scale-100"
                )}
                priority
                unoptimized
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300",
                  hoveredCard === 2 ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="text-white text-center">
                  <h3 className="text-[1.9rem] leading-[1.2em] text-white font-bold mb-[26px]">맞춤형 지원</h3>
                  <p className="text-[1rem] leading-[1.2em] text-white">파트너의 사업 규모와 목표에 맞는<br />맞춤형 비즈니스 모델과 마케팅 전략을 제안합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 파트너십 문의 폼 섹션 */}

      <div className="w-full py-16 md:px-[80px] md:py-[120px]" style={{ backgroundColor: '#F8F8F6' }}>
        {/* 상단 구분선 */}
        <div className="w-full h-px bg-black mb-8"></div>

        <div className="max-w-full mx-auto px-6 md:px-8 mt-[80px]">
          <h2 className="text-[1.2rem] md:text-[36px] leading-[0.9em] mb-8 md:mb-8 text-center" style={{ color: '#121212' }}>
            Partnership Inquiry
          </h2>
          <p className="text-gray-700 text-[0.8rem] md:text-[20px] leading-[1.2] text-center mb-[80px]">
            JG Gold Company에 파트너십을 제안하고 새로운 기회를 발견해 보세요.</p>
          
          <form className="max-w-4xl mx-auto space-y-6" onSubmit={handleSubmit}>
            {/* 이름 */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력해주세요"
                className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                required
              />
            </div>
            
            {/* 이메일 */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력해주세요"
                className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                required
              />
            </div>
            
            {/* 전화번호 */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="전화번호를 입력해주세요"
                className="w-full px-4 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                required
              />
            </div>
            
            {/* 문의사항 */}
            <div>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                placeholder="문의하실 내용을 입력해주세요"
                rows={8}
                className="w-full p-3 border-0 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical text-base"
                style={{ backgroundColor: '#FFFFFF', color: '#999999' }}
                required
              />
            </div>
            
            {/* 제출 메시지 */}
            {submitMessage && (
              <div className={`text-center py-4 px-6 rounded-lg ${
                submitMessage.includes('성공') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            {/* 제출 버튼 */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  width: '240px', 
                  height: '40px', 
                  backgroundColor: isSubmitting ? '#A2AD71' : '#443F36', 
                  padding: '12px 96px',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => !isSubmitting && ((e.target as HTMLButtonElement).style.backgroundColor = '#A2AD71')}
                onMouseLeave={(e) => !isSubmitting && ((e.target as HTMLButtonElement).style.backgroundColor = '#443F36')}
              >
                {isSubmitting ? '제출 중...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 비디오 섹션 */}
      <div className="w-full h-[300px] md:h-[675px] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
        >
          <source src="/Partnership_video_new.mp4" type="video/mp4" />
        </video>
      </div>
          
      {/* Footer 섹션 */}
      <AnimatedFooter />
    </div>
  );
}
