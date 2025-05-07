import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
    // props 에서 title, subtitle 가져오기
    const { title, subtitle } = props
    return (
        <HeaderWrapper>
            <div className='title'>{title}</div>
            {subtitle && <div className='subtitle'>{subtitle}</div>} 
        </HeaderWrapper>
    )
})

//  props 타입 정의 (title, subtitle 모두 문자열)
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader;
