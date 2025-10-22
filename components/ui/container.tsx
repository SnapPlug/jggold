import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'default' | 'tablet';
}

/**
 * 반응형 컨테이너 컴포넌트
 * - 데스크톱(1200px+): 최대 1100px, 좌우 패딩 100px, 상하 패딩 120-160px
 * - 태블릿(810px+): 최대 900px, 좌우 패딩 40px
 * - 모바일(390px+): 좌우 패딩 20px, 상하 패딩 조정
 */
export function Container({ 
  children, 
  className,
  maxWidth = 'default'
}: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto w-full",
      // 모바일: 좌우 패딩 20px
      "px-5",
      // 태블릿: 좌우 패딩 40px, 최대 너비 조정
      "tablet:px-10",
      "tablet:max-w-content-tablet",
      // 데스크톱: 좌우 패딩 100px, 최대 너비 1100px
      "desktop:px-[100px]",
      maxWidth === 'default' ? "desktop:max-w-content" : "desktop:max-w-content-tablet",
      className
    )}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'default' | 'large';
}

/**
 * 섹션 컴포넌트 - 상하 패딩 관리
 * - 데스크톱: 120px (default) 또는 160px (large)
 * - 태블릿/모바일: 상대적으로 조정된 패딩
 */
export function Section({ 
  children, 
  className,
  padding = 'default'
}: SectionProps) {
  return (
    <section className={cn(
      // 모바일: 기본 패딩
      "py-16",
      // 태블릿: 약간 증가된 패딩
      "tablet:py-20",
      // 데스크톱: 기본 120px 또는 큰 160px 패딩
      padding === 'default' ? "desktop:py-section-padding" : "desktop:py-section-padding-lg",
      className
    )}>
      {children}
    </section>
  );
}
