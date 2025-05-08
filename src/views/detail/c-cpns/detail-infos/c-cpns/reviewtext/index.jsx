import React, { memo } from 'react'
import { ReviewTextWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import StarIcon from '@/assets/svg/icon/star.svg?react';
import ReviewProfileIcon from '@/assets/svg/icon/header-userprofile.svg?react';


export default memo(function ReviewText() {

    // redux state에서 detailInfo 가져오기
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    // 데이터 없거나 배열 아니면 → "Loading..." 출력
    if (!detailInfo?.bottom_info || !Array.isArray(detailInfo.bottom_info)) {
        return <div>Loading...</div>
    }

    return (
        <ReviewTextWrapper>

            <div className='review-section'>
                <div className='review-score'>
                    <StarIcon className='staricon' width="20" height="20" />
                    <div className='score'>{detailInfo.reviews_score}</div>
                </div>

                <div className='review-count'>
                    <span>후기</span>
                    <div className="count">{detailInfo.reviews_count}개</div>
                </div>
            </div>

            <div className='review-text'>

                <div className='userinfo'>
                    <ReviewProfileIcon width="48" height="48" />
                    <div className='user'>
                        <div className='username'>{detailInfo.reviews[0].review_id}</div>
                        <div className='localized-date'>{detailInfo.reviews[0].localized_date}</div>
                    </div>
                </div>

                <div className='review-message'>
                    <div className='ratingdate'>
                        <div className='star-icon'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>

                        <div>{detailInfo.reviews[0].createdat}</div>
                    </div>

                    <div>
                        <div className='messagecontent'>{detailInfo.reviews[0].comments}</div>
                    </div>
                </div>
            </div>
        </ReviewTextWrapper>
    )
})
