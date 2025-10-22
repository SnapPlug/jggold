import { Container, Section } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedService from "@/components/AnimatedService";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 네비게이션바 */}
      <Navbar />
      
      {/* 히어로 섹션 */}
      <div className="h-[1160px] w-full flex items-center justify-center relative overflow-hidden">
        {/* 배경 이미지 */}
        <Image
          src="/1. Home_Landing Hero.png"
          alt="JG Gold Hero Background"
          fill
          className="object-cover object-center"
          style={{ borderRadius: 'inherit' }}
          priority
        />
        
        {/* 오버레이 효과 */}
        <div className="absolute inset-0"></div>
        
        <AnimatedHero />
      </div>
      
      {/* About 섹션 */}
      <div className="h-[1044px] w-full mx-auto bg-white dark:bg-black">
            <div className="grid lg:grid-cols-2 gap-0 h-full">
              {/* 왼쪽 텍스트 영역 */}
              <div className="flex flex-col justify-top pt-[30px] px-[30px] h-[575px]">
                <div className="w-[87%] h-[269px]">
                  <h2 className="font-sentient text-[1.75rem] leading-[1.2] font-normal text-black mb-[62px]">
                    Alternative Coffee,<br />
                    The Dawn of a New Lifestyle
                  </h2>
                  
                  <p className="text-[1rem] text-gray-700 dark:text-gray-300 mb-6 leading-[1.4] tracking-[-0.02em]">
                    JG Gold Company는 해외의 특별한 대체 커피 브랜드를 발굴해 한국에 소개하는 회사 입니다.
                  </p>
                  
                  <p className="text-[1rem] text-gray-700 dark:text-gray-300 mb-6 leading-[1.4] tracking-[-0.02em]">
                    창업자인 저의 소개를 먼저 해야할 것 같아요. 저는 커피를 너무 사랑해서 대학에서 커피 바리스타학과를 전공했고, 10년 넘게 공부해 외식경영학 박사가 되었습니다. 커피는 제 삶의 중심이었고, 제 정체성 그 자체였죠.
                  </p>
                  
                  <p className="text-[1rem] text-gray-700 dark:text-gray-300 mb-6 leading-[1.4] tracking-[-0.02em]">
                    그런데 임신과 출산을 경험하면서 카페인에 점점 민감해졌습니다. 커피를 많이 마시면 심장이 두근거리고, 늦게 마시면 잠을 잘 수 없었어요. 커피를 너무 사랑하는데 마실 수 없다니... 그 괴로움은 말로 다 할 수 없었습니다.
                  </p>
                  
                  <p className="text-[1rem] text-gray-700 dark:text-gray-300 mb-[55px] leading-[1.4] tracking-[-0.02em]">
                    그래서 저는 나 같은 사람도 즐길 수 있는 커피는 없을까?라는 질문으로 대체커피를 찾기 시작했습니다.
                  </p>
                  
                  <button className="w-[203px] h-[39px] border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300">
                    제 이야기 들어보실래요?
                  </button>
                </div>
              </div>
              
              {/* 오른쪽 이미지 영역 */}
              <div className="relative">
                <Image
                  src="/2. Home_Splitted Hero.png"
                  alt="About JG Gold - Coffee and Lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
      </div>
      
      {/* Service 섹션 */}
      <AnimatedService />
    </div>
  );
}
