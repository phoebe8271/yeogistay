import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter/index'
import EntireRooms from './c-cpns/entire-rooms/index'
import EntirePagination from './c-cpns/entire-pagination/index'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  // dispatch 함수 가져오기
  const dispatch = useDispatch()
  useEffect(() => {
    // 페이지 진입 시 → 숙소 리스트 요청 action 호출
    dispatch(fetchRoomListAction())
    // header 설정 변경: fixed true, 투명도 false
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch]) // 컴포넌트 마운트 시 1회 실행

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire