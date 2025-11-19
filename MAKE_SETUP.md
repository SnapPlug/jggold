# Make.com을 사용한 메일 전송 설정 가이드

Supabase에 문의 데이터가 저장되면 Make.com이 자동으로 관리자에게 메일을 전송하도록 설정하는 방법입니다.

## 설정 방법

### 1. Supabase Database Webhook 설정

1. Supabase 대시보드에 로그인
2. 프로젝트 선택 → **Database** → **Webhooks** 이동
3. **Create a new webhook** 클릭
4. 다음 정보 입력:
   - **Name**: `Inquiry Email Notification`
   - **Table**: `Inquiry`
   - **Events**: `INSERT` 체크
   - **HTTP Request**:
     - **Method**: `POST`
     - **URL**: Make.com에서 생성한 웹훅 URL (아래 2단계에서 생성)
     - **HTTP Headers**: (선택사항)
       - `Content-Type: application/json`
   - **HTTP Request Body**: 
     ```json
     {
       "name": "{{record.Name}}",
       "email": "{{record.Email}}",
       "phone": "{{record.Phone}}",
       "inquiry": "{{record.More Inquiry}}"
     }
     ```

### 2. Make.com 시나리오 생성

1. [Make.com](https://www.make.com)에 로그인
2. **Create a new scenario** 클릭
3. 다음 모듈들을 추가:

#### 모듈 1: Webhooks - Custom webhook
- **Webhook type**: Custom webhook
- **Webhook name**: `Inquiry Webhook`
- **Method**: POST
- **Webhook URL 복사** (Supabase Webhook 설정에 사용)

#### 모듈 2: Email - Send an email
- **Connection**: Gmail, Outlook 등 이메일 계정 연결
- **To**: 관리자 이메일 주소 (예: `stacyjung@jggoldcompany.com`)
- **Subject**: `[JG Gold Company] 새로운 파트너십 문의 - {{1.name}}`
- **Content type**: HTML
- **HTML content**:
```html
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #443F36; border-bottom: 2px solid #A2AD71; padding-bottom: 10px;">
    새로운 파트너십 문의가 접수되었습니다
  </h2>
  
  <div style="background-color: #F8F8F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #443F36; margin-top: 0;">문의자 정보</h3>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #443F36; width: 120px;">이름:</td>
        <td style="padding: 8px 0;">{{1.name}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #443F36;">이메일:</td>
        <td style="padding: 8px 0;">
          <a href="mailto:{{1.email}}" style="color: #A2AD71; text-decoration: none;">{{1.email}}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; color: #443F36;">전화번호:</td>
        <td style="padding: 8px 0;">
          <a href="tel:{{1.phone}}" style="color: #A2AD71; text-decoration: none;">{{1.phone}}</a>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E0E0E0; margin: 20px 0;">
    <h3 style="color: #443F36; margin-top: 0;">문의 내용</h3>
    <p style="white-space: pre-wrap; color: #666; line-height: 1.8;">{{1.inquiry}}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E0E0E0; font-size: 12px; color: #999;">
    <p>이 메일은 JG Gold Company 웹사이트의 파트너십 문의 폼을 통해 자동으로 발송되었습니다.</p>
  </div>
</div>
```

4. **Save** 후 **Run once**로 테스트
5. 테스트 성공 후 시나리오 **활성화**

## 동작 흐름

1. 사용자가 폼 제출
2. Supabase `Inquiry` 테이블에 데이터 저장
3. Supabase Webhook이 Make.com으로 POST 요청 전송
4. Make.com이 메일 전송

## 참고사항

- Make.com 무료 플랜: 월 1,000 operations 제공
- Supabase Webhook은 실시간으로 트리거됩니다
- 메일 전송 실패 시 Make.com에서 재시도 가능

