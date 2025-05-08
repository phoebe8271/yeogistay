import React, { memo, useState } from 'react'

import IosShareIcon from '@mui/icons-material/IosShare';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { HeaderWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'


const DetailHeader = memo(() => {
    // 좋아요 체크 상태 정의 (기본 false)
    const [favoriteChecked, setFavoriteChecked] = useState(false)

    // redux state에서 detailInfo 가져오기 (상세페이지 데이터)
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    //  detailInfo.name 없으면 렌더링 안 함
    if (!detailInfo?.name) {
        return null; 
      }

    return (
        <HeaderWrapper>
            <div className='detailheader-content'>
                <div className='header-l'>
                    <div className='detail-name'>{detailInfo?.name}</div>
                </div>

                <div className='header-r'>
                    <div className='share-icon'>
                        <IosShareIcon className='shareicon'/>
                        <span>공유</span>
                    </div>
                    <div className='save-icon'>
                        <Checkbox
                            className='favorite-icon'
                            checked={favoriteChecked}
                            onChange={(e) => setFavoriteChecked(e.target.checked)}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                        />
                        <span>저장</span>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
})

export default DetailHeader
