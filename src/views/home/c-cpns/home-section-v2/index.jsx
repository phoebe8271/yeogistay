// tab
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionRooms from '@/components/section-rooms/index'
import SectionHeader from '@/components/section-header/index'
import SectionTabs from '@/components/section-tabs/index'
import SectionFooter from '@/components/section-footer/index'

const HomeSectionV2 = memo((props) => {
    // 부모 컴포넌트로부터 데이터 받기
    const { infoData } = props

    // 현재 선택된 장소 이름
    const [placename, setName] = useState("")

    useEffect(() => {
        if (infoData?.dest_list?.length > 0) {
          setName(infoData.dest_list[0].placename) // 기본 첫 번째 장소 선택
        }
      }, [infoData])

    // 탭 클릭 시 장소 이름 변경
    const tabClickHandle = useCallback(function (placename) {
        setName(placename) 
    }, [])

    if (!infoData || !infoData.dest_list?.length) return null // 데이터 없으면 표시 안함
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
