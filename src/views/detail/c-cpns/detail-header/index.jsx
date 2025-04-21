import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

import ShareIcon from '@/assets/svg/icon/share.svg?react';

const DetailHeader = memo(() => {

    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    return (
        <HeaderWrapper>
            <div className='detailheader-content'>
                <div className='header-l'>
                    <div className='detail-name'>{detailInfo.name}</div>
                </div>

                <div className='header-r'>
                    <div className='share-icon'>
                        <ShareIcon className='shareicon'/>
                        <span>공유하기</span>
                    </div>
                    <div className='save-icon'>
                        <span>저장</span>
                    </div>
                </div>
            </div>

        </HeaderWrapper>
    )
})

DetailHeader.propTypes = {

}

export default DetailHeader
