import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchDetailInfoAction } from '@/store/modules/detail'

import { DetailWrapper } from './style'
import DetailInfos from './c-cpns/detail-infos/index'
import DetailPictures from './c-cpns/detail-pictures/index'
import DetailHeader from './c-cpns/detail-header/index'

export default memo(function Detail() {

  // 라우터 URL에서 id 파라미터 가져오기
  const { id } = useParams()

  // redux의 dispatch 함수 가져오기
  const dispatch = useDispatch()

  // 첫 렌더 시 header를 고정 해제 + 투명 아님으로 설정
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  // id 있으면 → dispatch로 상세 정보 요청
  useEffect(() => {
    if (id) {
      dispatch(fetchDetailInfoAction(id));
    }
  }, [id, dispatch]); // id가 바뀔 때마다 다시 요청

  return (
    <DetailWrapper>
      <DetailHeader />
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})
