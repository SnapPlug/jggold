import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * 문의 폼 제출 시 관리자에게 메일을 전송하는 API Route
 * Nodemailer를 사용하여 SMTP로 메일 전송
 * 
 * @param request - 폼 데이터를 포함한 POST 요청
 * @returns 성공/실패 응답
 * 
 * 환경 변수 필요:
 * - SMTP_HOST: SMTP 서버 호스트 (예: smtp.gmail.com)
 * - SMTP_PORT: SMTP 포트 (예: 587)
 * - SMTP_USER: SMTP 인증 이메일
 * - SMTP_PASS: SMTP 인증 비밀번호
 * - ADMIN_EMAIL: 메일을 받을 관리자 이메일 주소
 */
export async function POST(request: NextRequest) {
  const debugId = crypto.randomUUID();
  const context = 'api/send-email#POST';

  try {
    const body = await request.json();
    const { name, email, phone, inquiry } = body;

    // 서버 측 유효성 검사
    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json(
        { 
          message: '모든 필드를 입력해주세요.', 
          debugId 
        },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          message: '올바른 이메일 형식을 입력해주세요.', 
          debugId 
        },
        { status: 400 }
      );
    }

    // 환경 변수 확인
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !adminEmail) {
      console.error(`[ERROR][debugId=${debugId}] [${context}] Missing environment variables`);
      return NextResponse.json(
        { 
          message: '서버 설정 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', 
          debugId 
        },
        { status: 500 }
      );
    }

    // Nodemailer 트랜스포터 설정
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort === '465', // 465 포트는 SSL 사용
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 메일 내용 구성
    const mailOptions = {
      from: `"JG Gold Company 문의 시스템" <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `[JG Gold Company] 새로운 파트너십 문의 - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #443F36; border-bottom: 2px solid #A2AD71; padding-bottom: 10px;">
            새로운 파트너십 문의가 접수되었습니다
          </h2>
          
          <div style="background-color: #F8F8F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #443F36; margin-top: 0;">문의자 정보</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #443F36; width: 120px;">이름:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #443F36;">이메일:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #A2AD71; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #443F36;">전화번호:</td>
                <td style="padding: 8px 0;">
                  <a href="tel:${phone}" style="color: #A2AD71; text-decoration: none;">${phone}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E0E0E0; margin: 20px 0;">
            <h3 style="color: #443F36; margin-top: 0;">문의 내용</h3>
            <p style="white-space: pre-wrap; color: #666; line-height: 1.8;">${inquiry.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E0E0E0; font-size: 12px; color: #999;">
            <p>이 메일은 JG Gold Company 웹사이트의 파트너십 문의 폼을 통해 자동으로 발송되었습니다.</p>
            <p>문의 ID: ${debugId}</p>
          </div>
        </div>
      `,
      text: `
새로운 파트너십 문의가 접수되었습니다

문의자 정보:
- 이름: ${name}
- 이메일: ${email}
- 전화번호: ${phone}

문의 내용:
${inquiry}

---
이 메일은 JG Gold Company 웹사이트의 파트너십 문의 폼을 통해 자동으로 발송되었습니다.
문의 ID: ${debugId}
      `.trim(),
    };

    // 메일 전송
    console.log(`[INFO][debugId=${debugId}] [${context}] Sending email to ${adminEmail}`);
    const info = await transporter.sendMail(mailOptions);
    
    console.log(`[INFO][debugId=${debugId}] [${context}] Email sent successfully. MessageId: ${info.messageId}`);

    return NextResponse.json(
      { 
        message: '문의가 성공적으로 전송되었습니다.', 
        debugId 
      },
      { status: 200 }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
    console.error(`[ERROR][debugId=${debugId}] [${context}] Failed to send email:`, {
      error: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      { 
        message: '메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', 
        debugId 
      },
      { status: 500 }
    );
  }
}

