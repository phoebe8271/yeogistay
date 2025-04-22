import React, { memo } from 'react'
import { BannerWrapper } from './style'

export default memo(function HomeBanner() {
  return (
    <BannerWrapper>
      <div className="banner-content">
        <h1 className="title">기억에 남는 여행 여기에 있습니다</h1>
        <p className="subtitle">여기스테이</p>
      </div>
    </BannerWrapper>
  )
})