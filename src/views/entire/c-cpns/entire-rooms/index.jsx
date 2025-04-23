import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item/index'
// import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
    
    // 從 redux 中獲取 roomList 數據
    const { roomList, totalCount, isLoading } = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)

    // 點擊卡片後跳轉詳情頁面
    const navigate = useNavigate()
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

EntireRooms.propTypes = {

}

export default EntireRooms
