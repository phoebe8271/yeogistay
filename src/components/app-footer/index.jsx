import React, { memo } from 'react'
import { FooterWrapper } from './style'

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className='footer-wrapper'>

        <div className='footer-service'>
          <div>
            <h3>여기스테이 지원</h3>
            <ul>
              <li>내 여행 관리</li>
              <li>고객 서비스팀에 문의</li>
              <li>안전보안 자료 센터</li>
            </ul>
          </div>

          <div>
            <h3>호스팅</h3>
            <ul>
              <li>내 숙소 등록</li>
              <li>파트너 지원</li>
              <li>제휴 협력사로 등록</li>
            </ul>
          </div>

          <div>
            <h3>이용약관 및 설정</h3>
            <ul>
              <li>이용약관</li>
              <li>개인정보 보호정책</li>
              <li>쿠키 정책</li>
            </ul>
          </div>

          <div>
            <h3>여기스테이 정보</h3>
            <ul>
              <li>서비스 운영 방식</li>
              <li>채용</li>
              <li>문의처</li>
            </ul>
          </div>
        </div>

        <div className='footer-statement'>
          <div className='statement'>
            <div>© 2025 여기스테이, Inc.</div>
            <div>
              <ol>
                <li>・개인정보 처리방침・</li>
                <li>쿠키 정책・</li>
                <li>이용약관・</li>
                <li>사이트맵・</li>
                <li>환불 정책</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='footer-companyinfo'>연락처: support@yeogistay.com | 고객센터: 080-1234-5678 | 여기스테이는 숙소 예약 및 거래를 중개하는 플랫폼이며, 호스트가 제공하는 서비스의 책임은 해당 호스트에게 있습니다.</div>
      </div>
    </FooterWrapper>
  )
})
