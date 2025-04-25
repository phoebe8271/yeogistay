import React, { memo } from 'react'
import { DetailCardWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function DetailCard() {

    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    if (!detailInfo?.bottom_info || !Array.isArray(detailInfo.bottom_info)) {
        return <div>Loading...</div>
    }

    const nights = 5;
    const roomPrice = detailInfo.price * nights;
    const serviceFee = Math.round(roomPrice * 0.168);
    const total = roomPrice + serviceFee;

    return (
        <DetailCardWrapper>

            {/* 가격 표시 */}
            <div className="price-row">
                <span className="price">{detailInfo.price_format} KRW</span>
                <span className="per-night">/박</span>
            </div>

            {/* 날짜 / 인원 선택 */}
            <div className="selector-grid">
                <div className="selector">
                    <div className="label">체크인</div>
                    <div className="value">2025. 6. 8.</div>
                </div>
                <div className="selector">
                    <div className="label">체크아웃</div>
                    <div className="value">2025. 6. 13.</div>
                </div>
                <div className="selector full-width">
                    <div className="label">인원</div>
                    <div className="value">게스트 1명</div>
                </div>
            </div>

            {/* 예약 버튼 */}
            <button className="reserve-button">예약하기</button>

            {/* 예약 버튼 */}
            <div className="note">예약 확정 전에는 요금이 청구되지 않습니다.</div>

            {/* 가격 */}
            <div className="breakdown">
                <div className="row">
                    <span>{detailInfo.price_format} KRW x 5박</span>
                    <span>₩{roomPrice.toLocaleString()} KRW</span>
                </div>
                <div className="row">
                    <span>여기스테이 서비스 수수료</span>
                    <span>₩{serviceFee.toLocaleString()} KRW</span>
                </div>
            </div>

            {/* 총액 */}
            <div className="total">
                <span>총액</span>
                <span>₩{total.toLocaleString()} KRW</span>
            </div>
        </DetailCardWrapper>
    )
})
