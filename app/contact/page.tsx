import { Container, Section } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 네비게이션바 */}
      <Navbar />
      
      {/* Contact 페이지 메인 콘텐츠 */}
      <div className="w-full bg-[#BBB5AD] py-16">
        <div className="max-w-full mx-auto px-3 md:px-8">
          {/* 상단 구분선 */}
          <div className="w-full h-px bg-black mb-8"></div>
          
          {/* 모바일 레이아웃 */}
          <div className="md:hidden flex flex-col gap-8 mb-16">
            {/* Contact 제목 */}
            <h2 className="text-[1.2rem] leading-[0.9em]" style={{ color: '#121212' }}>
              Contact
            </h2>
            
            {/* 연락처 정보 2x2 그리드 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-black text-[0.8rem] leading-[1.2em]">Phone</span>
                <p className="text-white/70 text-[0.8rem] leading-[1.2em]">+82 70-7633-9525</p>
              </div>
              
              <div className="space-y-2">
                <span className="text-black text-[0.8rem] leading-[1.2em]">Address</span>
                <p className="text-white/70 text-[0.8rem] leading-[1.2em] break-words">1404, 24, Simin-ro, Uijeongbu-si, Gyeonggi-do, Republic of Korea 11649</p>
              </div>
              
              <div className="space-y-2">
                <span className="text-black text-[0.8rem] leading-[1.2em]">Email</span>
                <p className="text-white/70 text-[0.8rem] leading-[1.2em] break-words">stacyjung@jggoldcompany.com</p>
              </div>
              
              <div className="space-y-2">
                <span className="text-black text-[0.8rem] leading-[1.2em]">Fax</span>
                <p className="text-white/70 text-[0.8rem] leading-[1.2em]">0504-045-9525</p>
              </div>
            </div>
          </div>

          {/* 데스크톱 레이아웃 */}
          <div className="hidden md:flex items-start gap-8 mb-16">
            {/* Contact 제목 */}
            <div className="w-1/2">
              <h2 className="text-[1.9rem] leading-[0.9em]" style={{ color: '#121212' }}>
                Contact
              </h2>
            </div>
            
            {/* 연락처 정보 */}
            <div className="w-1/2 grid grid-cols-2 gap-[30px]">
              <div className="space-y-4 w-full h-full">
                <div className="h-1/2">
                  <span className="text-black text-[1rem] leading-[1.2em]">Phone</span>
                  <p className="text-white/70 text-[1rem] leading-[1.2em]">+82 70-7633-9525</p>
                </div>
                <div className="h-1/2">
                  <span className="text-black text-[1rem] leading-[1.2em]">Email</span>
                  <p className="text-white/70 text-[1rem] leading-[1.2em]">stacyjung@jggoldcompany.com</p>
                </div>
              </div>
              
              <div className="space-y-4 w-full h-full">
                <div className="h-1/2">
                  <span className="text-black text-[1rem] leading-[1.2em]">Address</span>
                  <p className="text-white/70 text-[1rem] leading-[1.2em]">1404, 24, Simin-ro, Uijeongbu-si, Gyeonggi-do, Republic of Korea 11649</p>
                </div>
                <div className="h-1/2">
                  <span className="text-black text-[1rem] leading-[1.2em]">Fax</span>
                  <p className="text-white/70 text-[1rem] leading-[1.2em]">0504-045-9525</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact 이미지 */}
          <div className="w-full aspect-square md:aspect-auto">
            <Image
              src="/Contact.png"
              alt="Contact JG Gold"
              width={1200}
              height={600}
              className="w-full h-full object-cover md:h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Footer 섹션 */}
      <AnimatedFooter />
    </div>
  );
}
