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


export default memo(function Home() {
  // useSelector: Redux store 값 가져오기 (shallowEqual: 얕은 비교로 불필요 렌더 방지)
  const { goodPriceInfo, hotPlaceInfo, findMoreRoomsInfo, highScoreInfo, discoverCityInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    hotPlaceInfo: state.home.hotPlaceInfo,
    findMoreRoomsInfo: state.home.findMoreRoomsInfo,
    highScoreInfo: state.home.highScoreInfo,
    discoverCityInfo: state.home.discoverCityInfo
  }), shallowEqual)

  // useDispatch: dispatch 함수 가져오기
  const dispatch = useDispatch()

  useEffect(() => {
    // 컴포넌트 마운트 시 API 데이터 요청
    dispatch(fetchHomeDataAction()) 
    // 헤더 설정값 변경 (헤더 고정, alpha 적용)
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true })) 
  }, [dispatch]) // dispatch 의존성 (dispatch 바뀌면 다시 실행)

  return (
    <HomeWrapper>
      {/* 배너 컴포넌트 */}
      <HomeBanner />

      <div className='content-wrapper'>
         {/* 각 영역 데이터 있을 때만 렌더 */}
        {hasObjectValue(hotPlaceInfo) && <HomeSectionV2 infoData={hotPlaceInfo} />}
        {hasObjectValue(discoverCityInfo) && <HomeDiscoverCity infoData={discoverCityInfo} />}
        {hasObjectValue(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {hasObjectValue(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {hasObjectValue(findMoreRoomsInfo) && <HomeSectionV1 infoData={findMoreRoomsInfo} />}
      </div>
    </HomeWrapper>
  )
})