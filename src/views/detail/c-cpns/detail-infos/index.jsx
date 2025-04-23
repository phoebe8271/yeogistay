import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { InfosWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailInfos = memo(() => {

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <InfosWrapper>
      <div className="detailinfos">
        <div className="namesinfo">
          <div className='detail-title'>{detailInfo.title}</div>
          <div className='detail-verifyinfo'>{detailInfo.verify_info[0].message}</div>
        </div>

        <div className="rating-box">
          <div className='rating-content'>
            <div className='rating-badge'>
              <div className="badge">{detailInfo.bottom_info[0].content}</div>
              <div className='badge-text'>여시스테이 게스트에게 가장 사랑받는 숙소</div>
            </div>
            <div className='rating-review'>
              <div className='reviews-score'>{detailInfo.reviews_score}</div>
              <div className="review-count">{detailInfo.reviews_count}</div>
            </div>
          </div>

        </div>

      </div>
    </InfosWrapper>
  )
})

DetailInfos.propTypes = {

}

export default DetailInfos

