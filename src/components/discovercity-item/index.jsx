import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from './style'

const DiscoverCityItem = memo((props) => {
    const { itemData } = props
    return (
        <ItemWrapper>
            <div className='inner'>
                <div className='item-info'>
                    <div className='cover'>
                        <img src={`http://localhost:1337${itemData.picture_url?.formats?.medium?.url}`} alt=""></img>
                    </div>

                    {/* 배경 커버: 그라데이션 효과용 */}
                    <div className='bg-cover'></div>

                    <div className='info'>
                        <div className='city'>{itemData.city}</div>
                        <div className='price'>평균 {itemData.price}/1박</div>
                    </div>
                </div>
            </div>
        </ItemWrapper>
    )
})

DiscoverCityItem.propTypes = {
    itemData: PropTypes.object
}

export default DiscoverCityItem
