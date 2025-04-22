import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter/index'
import EntireRooms from './c-cpns/entire-rooms/index'
import EntirePagination from './c-cpns/entire-pagination/index'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  // 發送網路請求，獲取數據，並且保存當前的頁面
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.propTypes = {

}

export default Entire
