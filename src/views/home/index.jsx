import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner/index';
import { HomeWrapper } from './style';
import HomeSectionV1 from './c-cpns/home-section-v1/index';
import HomeSectionV2 from './c-cpns/home-section-v2/index';
import HomeDiscoverCity from './c-cpns/home-discovercity/index';
import { hasObjectValue } from '@/utils/has-object-value';
import { changeHeaderConfigAction } from '@/store/modules/main';

import SingUpPanel from '@/components/app-header/c-cpns/header-right/c-cpns/signup';


export default memo(function Home() {
  // 從 redux 中獲取數據
  const { goodPriceInfo, hotPlaceInfo, findMoreRoomsInfo, highScoreInfo, discoverCityInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    hotPlaceInfo: state.home.hotPlaceInfo,
    findMoreRoomsInfo: state.home.findMoreRoomsInfo,
    highScoreInfo: state.home.highScoreInfo,
    discoverCityInfo: state.home.discoverCityInfo
  }), shallowEqual)

  // 派發異步事件：發起進行的網路請求
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content-wrapper'>
        {/* <h1>기억에 남는 여행 여기에 있습니다, 여기스테이</h1> */}

        {hasObjectValue(hotPlaceInfo) && <HomeSectionV2 infoData={hotPlaceInfo} />}

        {hasObjectValue(discoverCityInfo) && <HomeDiscoverCity infoData={discoverCityInfo} />}


        {hasObjectValue(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {hasObjectValue(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {hasObjectValue(findMoreRoomsInfo) && <HomeSectionV1 infoData={findMoreRoomsInfo} />}

        <SingUpPanel/>
      </div>

    </HomeWrapper>
  )
})