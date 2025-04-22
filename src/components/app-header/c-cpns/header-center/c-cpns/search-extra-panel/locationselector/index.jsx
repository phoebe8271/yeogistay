import React, { memo, useState, forwardRef } from 'react'

import locationSuggestions from '@/assets/data/locationsuggestions.json'
import { LocationSelectorWrapper } from './style'

const LocationSelector = forwardRef((props, ref) => {
    const [, setSelected] = useState(null)

    return (
        <LocationSelectorWrapper ref={ref}>
            <h4>지역으로 검색하기</h4>
            <div className="scroll-container">
                {locationSuggestions.map((item, idx) => (
                    <div className="section item" key={idx} onClick={() => setSelected(item.title)}>
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                    </div>
                ))}
            </div>
        </LocationSelectorWrapper>
    )
})

export default memo(LocationSelector)
