import { Container, Section } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import AnimatedAboutText from "@/components/AnimatedAboutText";
import AnimatedFacts from "@/components/AnimatedFacts";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JG Gold Company | CEO 정경희 Stacy Jung | 대체커피 전문가",
  description: "JG Gold Company CEO 정경희 Stacy Jung의 이야기. 커피 바리스타학과 전공, 외식경영학 박사 출신으로 대체커피 전문가가 되기까지의 여정을 소개합니다.",
  keywords: "JG Gold CEO, 정경희, Stacy Jung, 대체커피 전문가, 커피 바리스타, 외식경영학 박사",
  openGraph: {
    title: "About JG Gold Company | CEO 정경희 Stacy Jung",
    description: "대체커피 전문가 CEO 정경희 Stacy Jung의 이야기",
    type: "website",
    locale: "ko_KR",
    siteName: "JG Gold Company",
    images: [
      {
        url: "/1. About_Home.png",
        width: 1200,
        height: 630,
        alt: "JG Gold Company CEO 정경희 Stacy Jung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About JG Gold Company | CEO 정경희 Stacy Jung",
    description: "대체커피 전문가 CEO의 이야기",
    images: ["/1. About_Home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jggoldcompany.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 네비게이션바 */}
      <Navbar />
      
      {/* Hero 섹션 */}
      <div className="h-[538px] md:h-[960px] w-full flex items-center justify-center relative overflow-hidden">
        {/* 배경 이미지 */}
        <Image
          src="/1. About_Home.png"
          alt="About JG Gold Hero Background"
          fill
          className="object-cover object-center"
          style={{ borderRadius: 'inherit' }}
          priority
        />
        
        {/* 오버레이 효과 */}
        <div className="absolute inset-0"></div>
        
        {/* 텍스트 오버레이 */}
        <div className="absolute inset-0 flex items-start justify-start">
          <div className="pt-[128px] pl-3 md:pl-[97px]">
            <AnimatedAboutText />
          </div>
        </div>
      </div>
      
      {/* CEO 섹션 */}
      <div className="w-full h-auto md:h-[649px] bg-white px-[120px] py-[80px]">
        {/* CEO 섹션 제목 */}
        <div className="px-3 md:px-[30px] h-auto md:h-[87px] py-4 md:py-0 flex items-center">
          <h2 className="text-[1.2rem] md:text-[1.9rem] leading-[0.9em]" style={{ color: '#121212' }}>
            CEO 정경희 Stacy Jung
          </h2>
        </div>
        
        {/* 모바일 레이아웃 */}
        <div className="md:hidden flex flex-col gap-6 px-3 py-6">
          {/* CEO 이미지 */}
          <div className="relative h-[241px] w-[187.5px] mx-auto">
            <Image
              src="/2. About_CEO.png"
              alt="CEO 정경희 Stacy Jung"
              fill
              className="object-cover"
            />
          </div>
          
          {/* 텍스트 영역 */}
          <div className="space-y-4 text-gray-800 text-[0.8rem]">
            <p>
              창업자인 저의 소개를 먼저 해야할 것 같아요. 저는 커피를 너무 사랑해서 대학에서 커피 바리스타학과를 전공했고, 10년 넘게 공부해 외식경영학 박사가 되었습니다. 커피는 제 삶의 중심이었고, 제 정체성 그 자체였죠.
            </p>
            
            <p>
              그런데 임신과 출산을 경험하면서 카페인에 점점 민감해졌습니다. 커피를 많이 마시면 심장이 두근거리고, 늦게 마시면 잠을 잘 수 없었어요. 커피를 너무 사랑하는데 마실 수 없다니... 그 괴로움은 말로 다 할 수 없었습니다. 그래서 저는 '나 같은 사람도 즐길 수 있는 커피는 없을까?'라는 질문으로 대체커피를 찾기 시작했습니다. 
            </p>
            <p>  
              한국의 대체커피 시장을 조사하면서 선택지가 너무 적다는 걸 깨달았고, 유럽의 수많은 브랜드에 직접 연락해 샘플을 받아 테이스팅을 시작했어요. 70여 개 브랜드를 컨택하고 34곳 이상과 소통하며, 진짜 '대체'가 아닌 '새로운 커피 문화'를 만들 수 있는 가능성을 발견했습니다. 카페인 0%의 대체커피는 단순한 대안이 아니라, 누구나 커피의 향과 감성을 안전하게 즐길 수 있는 새로운 선택의 시작이라 믿습니다.              </p>
            
            <p>
              JG Gold Company는 커피를 포기하지 않으면서도 자신의 몸과 마음에 맞는 커피를 즐길 수 있도록 세상에 '새로운 선택'을 제안합니다.
            </p>
          </div>
        </div>

        {/* 데스크톱 레이아웃 */}
        <div className="hidden md:flex gap-[15px] h-[404px] pl-[50px] pr-[57px] pt-[3px]">
          {/* 왼쪽 CEO 이미지 */}
          <div className="relative h-[399px] w-[310px]">
            <Image
              src="/2. About_CEO.png"
              alt="CEO 정경희 Stacy Jung"
              fill
              className="object-cover"
            />
          </div>
          
          {/* 오른쪽 텍스트 영역 */}
          <div className="flex flex-col justify-end h-[404px] pl-8 pr-8 flex-1">
            <div className="space-y-6 text-gray-700 text-[18px]">
              <p>
                창업자인 저의 소개를 먼저 해야할 것 같아요. 저는 커피를 너무 사랑해서 대학에서 커피 바리스타학과를 전공했고, 10년 넘게 공부해 외식경영학 박사가 되었습니다. 커피는 제 삶의 중심이었고, 제 정체성 그 자체였죠.
              </p>
              
              <p>
                그런데 임신과 출산을 경험하면서 카페인에 점점 민감해졌습니다. 커피를 많이 마시면 심장이 두근거리고, 늦게 마시면 잠을 잘 수 없었어요. 커피를 너무 사랑하는데 마실 수 없다니... 그 괴로움은 말로 다 할 수 없었습니다. 그래서 저는 '나 같은 사람도 즐길 수 있는 커피는 없을까?'라는 질문으로 대체커피를 찾기 시작했습니다. 
              </p>
              <p>  
                한국의 대체커피 시장을 조사하면서 선택지가 너무 적다는 걸 깨달았고, 유럽의 수많은 브랜드에 직접 연락해 샘플을 받아 테이스팅을 시작했어요. 70여 개 브랜드를 컨택하고 34곳 이상과 소통하며, 진짜 '대체'가 아닌 '새로운 커피 문화'를 만들 수 있는 가능성을 발견했습니다. 카페인 0%의 대체커피는 단순한 대안이 아니라, 누구나 커피의 향과 감성을 안전하게 즐길 수 있는 새로운 선택의 시작이라 믿습니다.              </p>
              
              <p>
                JG Gold Company는 커피를 포기하지 않으면서도 자신의 몸과 마음에 맞는 커피를 즐길 수 있도록 세상에 '새로운 선택'을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Facts 섹션 */}
      <div className="w-full bg-white py-16 md:py-[120px] md:px-[80px]">
        <div className="max-w-full mx-auto px-3 md:px-8">
          {/* 상단 구분선 */}
          <div className="w-full h-px bg-black mb-8"></div>
          
          {/* 모바일 Facts 헤더 */}
          <div className="md:hidden flex flex-col gap-4 mb-8">
            <h2 className="text-[1.2rem] leading-[0.9em]" style={{ color: '#121212' }}>Facts</h2>
            <p className="text-gray-700 text-[0.8rem] leading-[1.2]">
              Since our founding, we've conducted over 133 brand research projects and 52 tasting sessions, collaborating with 8 global partners across 3 countries to discover the finest caffeine-free experiences.
            </p>
          </div>

          {/* 데스크톱 Facts 헤더 */}
          <div className="hidden md:flex justify-between items-start mb-12 mt-[80px]">
            <h2 className="text-[1.9rem] leading-[0.9em]" style={{ color: '#121212' }}>Facts</h2>
            <div className="max-w-full">
              <p className="text-gray-700 text-[1rem] leading-[1.2]">
                Since our founding, we've conducted over 133 brand research projects and 52 tasting sessions, <br/>
                collaborating with 8 global partners across 3 countries to discover the finest caffeine-free experiences.
              </p>
            </div>
          </div>
          
          {/* 통계 카드들 */}
          <AnimatedFacts />
        </div>
      </div>
      
      {/* Certifications & Credentials 섹션 */}
      <div className="w-full bg-white py-16 md:py-[120px] md:px-[80px]">
        <div className="max-w-full mx-auto px-3 md:px-8">
                      {/* 상단 구분선 */}
          <div className="w-full h-px bg-black mb-8"></div>
          <h2 className="text-[1.2rem] md:text-[36px] leading-[0.9em] mb-8" style={{ color: '#121212' }}>
            Certifications & Credentials
          </h2>
          
          <div className="space-y-0">
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">ISO 17024 ESG Auditor(ESG 국제심사원). IQCS</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2023.09</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">Green Coffee Professional. SCA</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.09</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">Roasting Professional. SCA</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.08</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">Sensory Skills Professional. SCA</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.08</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">티소믈리에. (사)한국티협회</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.06</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">Brewing Professional. SCA</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.05</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">Barista Skills Professional. SCA</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2017.04</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px] border-b border-black">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">조주기능사. 한국산업인력공단</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2015.12</span>
            </div>
            
            <div className="flex justify-between items-start py-2 min-h-[39px]">
              <span className="text-gray-900 text-[0.8rem] md:text-[18px] w-[70%] leading-tight">커피마스터. 한국커피연합회</span>
              <span className="text-gray-600 text-[0.8rem] md:text-[18px] w-[25%] text-right">2015.12</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* CI 섹션 */}
      <div className="w-full bg-white py-16 md:py-[120px] md:px-[80px]">
        <div className="max-w-full mx-auto px-3 md:px-8">
          {/* 상단 구분선 */}
          <div className="w-full h-px bg-black mb-8"></div>
          
          <h2 className="text-[1.2rem] md:text-[36px] leading-[0.9em] mb-8" style={{ color: '#121212' }}>
            CI
          </h2>
          
          {/* CI 이미지 */}
          <div className="mb-8">
            <Image
              src="/3. About_CI.png"
              alt="JG Gold Corporate Identity"
              width={1680}
              height={545}
              className="w-full h-auto"
            />
          </div>
          
          {/* CI 설명 텍스트 */}
          <div className="max-w-full">
            <p className="text-gray-800 text-[0.8rem] md:text-[18px] leading-[1.2em] mt-[30px] md:mt-[70px]">
              JG GOLD는 도형을 형상화하여 가치를 담았습니다. 아직 익숙하지 않은 길을 함께 걸으며, 새로운 커피 문화를 개척하는 우리의 여정을 상징합니다.
              <br />
              누구나 이 여정에 동참해 주길 바라며, 로고 속 곡선처럼 '유연하고 따뜻한 변화의 길'을 만들어가길 바랍니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer 섹션 */}
      <AnimatedFooter />
    </div>
  );
}
