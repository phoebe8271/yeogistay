import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { BadgeBoxWrapper } from './style'
import ViewBowRightIcon from '@/assets/svg/icon/viewbox-right.svg?react';
import ViewBowLeftIcon from '@/assets/svg/icon/viewbox-left.svg?react';
import StarIcon from '@/assets/svg/icon/star.svg?react';


export default memo(function BadgeBox() {

    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    if (!detailInfo?.bottom_info || !Array.isArray(detailInfo.bottom_info)) {
        return <div>Loading...</div>
    }
    return (
        <BadgeBoxWrapper>

            <div className='rating-box'>

                <div className='rating-badge'>
                    <div className='badgeicon'>
                        <ViewBowRightIcon />
                        <div className="badge">{detailInfo.bottom_info[0]?.content}</div>
                        <ViewBowLeftIcon />
                    </div>
                    <div className='badge-text'>여기스테이 게스트에게 가장 사랑받는 숙소</div>
                </div>

                <div className='rating-content'>
                    <div className='rating-score'>
                        <div className='score'>{detailInfo.reviews_score}</div>
                        <div className='star-icon'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>

                    <div className='rating-count'>
                        <div className="count">{detailInfo.reviews_count}개</div>
                        <span>후기</span>
                    </div>
                </div>
            </div>



        </BadgeBoxWrapper>
    )
})
