/**
 * JSON-LD 구조화된 데이터 컴포넌트
 * Google 검색 결과의 리치 스니펫 향상을 위한 스키마 마크업
 */

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * 조직 스키마 (Organization Schema)
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JG Gold",
    description: "카페인 없는 커피와 대체커피 전문 프랑스 브랜드",
    url: "https://jggold.com",
    logo: "https://jggold.com/JG_Logo.png",
    sameAs: [
      // 소셜 미디어 링크들이 있다면 여기에 추가
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
    },
  };

  return <JsonLd data={data} />;
}

/**
 * 웹사이트 스키마 (WebSite Schema)
 */
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JG Gold",
    url: "https://jggold.com",
    description: "카페인 프리, 디카페인, 루핀커피, 치커리커피 등 다양한 대체커피를 제공하는 프랑스 유럽 브랜드",
    keywords: [
      "대체커피",
      "카페인 프리",
      "디카페인",
      "루핀커피",
      "치커리커피",
      "프랑스 브랜드",
      "유럽 브랜드",
      "무카페인",
      "건강 음료",
      "웰니스 음료",
    ],
  };

  return <JsonLd data={data} />;
}

/**
 * 검색 기능 스키마 (SearchAction Schema)
 */
export function SearchActionJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JG Gold",
    url: "https://jggold.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jggold.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

/**
 * BreadcrumbList 스키마
 */
export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

