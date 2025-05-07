import React, { memo, useState } from 'react'

import IosShareIcon from '@mui/icons-material/IosShare';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { HeaderWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'


const DetailHeader = memo(() => {
    const [favoriteChecked, setFavoriteChecked] = useState(false)

    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

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
