import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';


const EntirePagination = memo(() => {


  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 12)
  const startCount = currentPage * 12 + 1
  const endCount = (currentPage + 1) * 12

  // 事件處理
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到頂部
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))

  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} size="large" onChange={pageChangeHandle} />
            <div className='desc'>
              {/* currentPage: */}
              {startCount}–{endCount}개 보기 (총 48개 숙소)
            </div>
          </div>
        )
      }
    </PaginationWrapper >
  )
})

EntirePagination.propTypes = {

}

export default EntirePagination
