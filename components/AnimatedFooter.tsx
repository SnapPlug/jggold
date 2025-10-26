"use client";

import Image from "next/image";

export default function AnimatedFooter() {
  return (
    <footer className="w-full h-[388px] bg-black text-white">
      <div className="w-full px-3 md:px-[30px]">
        <div className="max-w-full mx-auto">
          {/* 상단 네비게이션 섹션 */}
          <div className="flex justify-top h-[288px] pt-1 gap-4 md:gap-0">
            {/* Pages 섹션 */}
            <div className="h-[194px] py-[47px] w-[150px] md:w-[300px]">
                <h3 className="text-[#f5f5f5]/40 text-[0.8rem] md:text-[1rem] leading-[19px] mb-[10px] font-medium">Pages</h3>
                <ul className="space-y-[10px]">
                <li><a href="#" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Home</a></li>
                <li><a href="/about" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">About</a></li>
                <li><a href="/#partners" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Partners</a></li>
                <li><a href="/#products" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Products</a></li>
                <li><a href="/contact" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Contact</a></li>
                <li><a href="/partnership-inquiry" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Partnership Inquiry</a></li>
              </ul>
            </div>
            
            {/* Socials 섹션 */}
            <div className="h-[194px] py-[47px] w-[120px] md:w-auto">
              <h3 className="text-[#f5f5f5]/40 text-[0.8rem] md:text-[1rem] leading-[19px] font-medium mb-[10px]">Socials</h3>
              <ul className="space-y-[10px]">
                <li><a href="#" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Thread</a></li>
              </ul>
            </div>
          </div>
          
          {/* 하단 로고 및 저작권 섹션 */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-auto md:h-[80px] space-y-2 md:space-y-0">
            {/* 로고 */}
            <div className="relative order-1 md:order-1 mt-5 md:mt-0" style={{ width: '150px', height: '19px' }}>
              <Image
                src="/JG_Logo.png"
                alt="JG Gold Logo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* 저작권 및 법적 링크들 */}
            <div className="flex flex-col md:flex-col items-center md:items-end order-2 md:order-2 space-y-1 md:space-y-1">
              {/* 저작권 */}
              <div className="text-white text-[12px] md:text-[14px]">
                © 2025 JG Gold Company
              </div>
              
              {/* 법적 링크들 */}
              <div className="flex justify-center md:justify-end space-x-6 md:space-x-8">
                <a href="#" className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors">Privacy</a>
                <a href="#" className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors">Terms of Service</a>
                <a href="#" className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors">Company</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
