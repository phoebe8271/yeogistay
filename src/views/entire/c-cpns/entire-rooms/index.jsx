import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item/index'
// import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
    
    // redux store에서 roomList 상태 가져오기
    const { roomList, totalCount, isLoading } = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual) // 얕은 비교로 불필요한 리렌더 방지

    // 페이지 이동 함수 가져오기
    const navigate = useNavigate()

    // 숙소 카드 클릭 시 detail 페이지 이동 (useCallback으로 함수 메모이제이션)
    const itemClickHandle = useCallback((item) => {
        navigate(`/detail/${item.id}`)
    }, [navigate])


    return (
        <RoomsWrapper>
            <h2 className='entire-title'>숙소 {totalCount}개 이상</h2>
            <div className='list'>
                {
                    Array.isArray(roomList) && roomList.map(item => (
                        <RoomItem
                            itemData={item}
                            column={4}
                            gap={24}
                            key={item.id}
                            itemClick={itemClickHandle}
                        />
                    ))
                }
            </div>
            {isLoading && <div className='entirerooms-cover'></div>}
        </RoomsWrapper>
    )
})

export default EntireRooms