// tab
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'

import SectionRooms from '@/components/section-rooms/index'
import SectionHeader from '@/components/section-header/index'
import SectionTabs from '@/components/section-tabs/index'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer/index'

const HomeSectionV2 = memo((props) => {
    // 從 props 獲取數據
    const { infoData } = props

    // 定義內部的 State 
    const [placename, setName] = useState("")

    useEffect(() => {
        if (infoData?.dest_list?.length > 0) {
          setName(infoData.dest_list[0].placename)
        }
      }, [infoData])

    // 事件處理函數
    const tabClickHandle = useCallback(function (placename) {
        setName(placename)
    }, [])

    if (!infoData || !infoData.dest_list?.length) return null
    const currentRooms = infoData.dest_list?.find(item => item.placename === placename)?.homes || []

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs
                tabNames={infoData.dest_list || []}
                tabClick={tabClickHandle}
            />
            <SectionRooms
                roomList={currentRooms}
                column={3}
                gap={32}
            />
            <SectionFooter name={placename}/>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2
