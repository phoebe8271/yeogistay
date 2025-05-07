import React, { memo } from 'react'

import { InfosWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import Badgebox from './c-cpns/badgebox/index';
import Reviewtext from './c-cpns/reviewtext/index';
import DetailCard from './c-cpns/detail-card/index';
import TipContainer from './c-cpns/tip-container/index';

const DetailInfos = memo(() => {

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  if (!detailInfo?.bottom_info || !Array.isArray(detailInfo.bottom_info)) {
    return <div>Loading...</div>
  }

  return (
    <InfosWrapper>
      <div className="detailinfos">
        <div className="namesinfo">
          <div className='detail-title'>{detailInfo.title}</div>
          {detailInfo.verify_info?.[0]?.message && (
            <div className="verify-message">{detailInfo.verify_info[0].message.join("・")}</div>
          )}
        </div>

        <div className='center-part'>
          <div className='review-section'>
            <Badgebox />
            <Reviewtext />
          </div>

          <div className='card'>
            <TipContainer />
            <DetailCard />
          </div>
        </div>

        <div className="room-pic">
          <span>숙박 장소</span>
          <img src={`http://localhost:1337${detailInfo.image_url?.[0]?.formats?.medium?.url}`} />
        </div>

        <div className='map'>
          <div className='site'>위치</div>
          <iframe
            title="Seoul Map"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://map.kakao.com/link/map/서울,37.5665,126.9780"
          />
        </div>

      </div>
    </InfosWrapper>
  )
})

export default DetailInfos

