import React, { memo, useEffect } from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
import { DetialWrapper } from './style'
import DetailInfos from './c-cpns/detail-infos/index'
import DetailPictures from './c-cpns/detial-pictures/index'
import DetailHeader from './c-cpns/detail-header/index'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default memo(function Detail() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  return (
    <DetialWrapper>
      <DetailHeader />
      <DetailPictures />
      <DetailInfos />
    </DetialWrapper>
  )
})
