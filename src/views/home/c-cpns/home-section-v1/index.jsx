import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionV1Wrapper } from './style'
import SectionRooms from '@/components/section-rooms/index'
import SectionHeader from '@/components/section-header/index'
import SectionFooter from '@/components/section-footer/index'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props

    if (!infoData?.title) return null

    return (
        <SectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionRooms roomList={infoData.list_item} column={4} gap={24} />
            <SectionFooter />
        </SectionV1Wrapper>
    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1