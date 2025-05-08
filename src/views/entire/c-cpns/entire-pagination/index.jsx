import React, { memo } from 'react'
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

  const totalPage = Math.ceil(totalCount / 12) // 전체 페이지 수 (한 페이지에 12개 → 올림)
  const startCount = currentPage * 12 + 1 // 현재 페이지 시작 번호
  const endCount = (currentPage + 1) * 12 // 현재 페이지 끝 번호

  // dispatch 함수 가져오기
  const dispatch = useDispatch()
  
  
  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0, 0) // 페이지 변경 시 → 스크롤 맨 위로 이동
    dispatch(fetchRoomListAction(pageCount - 1)) // 새로운 페이지 데이터 요청 (page 0부터 시작 → -1)
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

export default EntirePagination