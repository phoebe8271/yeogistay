import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon/arrow-right.svg?react'

const SectionFooter = memo((props) => {
    const { name } = props

    let showMessage = "모두 보기"
    if (name) {
        showMessage = `${name} 숙소 더 보기`

    }

    const navigate = useNavigate()
    function moreClickHandle() {

        navigate("/entire")
    }

    return (
        <FooterWrapper>
            <div className='info' onClick={moreClickHandle}>
                <span className='text'>{showMessage}</span>
                <IconMoreArrow className='morearrow' />
            </div>

        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string

}

export default SectionFooter
