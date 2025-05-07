import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
    // props 에서 roomList, column, gap 가져오고 기본값 설정
    const { roomList = [], column = 4, gap = 24 } = props

    return (
        <RoomsWrapper $gap={gap}>
            {
                roomList?.slice(0, 8)?.map(item => {
                    return <RoomItem itemData={item} key={item.id} column={column} gap={gap} />
                })
            }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array,
    column: PropTypes.number,
    gap: PropTypes.number

}

export default SectionRooms
