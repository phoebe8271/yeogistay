import React, { memo, useEffect } from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchDetailInfoAction } from '@/store/modules/detail'


import { DetailWrapper } from './style'
import DetailInfos from './c-cpns/detail-infos/index'
import DetailPictures from './c-cpns/detail-pictures/index'
import DetailHeader from './c-cpns/detail-header/index'

export default memo(function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailInfoAction(id));
    }
  }, [id, dispatch]);

  return (
    <DetailWrapper>
      <DetailHeader />
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})
