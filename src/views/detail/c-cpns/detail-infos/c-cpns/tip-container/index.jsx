import React, { memo } from 'react'
import { TipWapper } from './style';
import DiamondIcon from '@/assets/svg/icon/gem.svg?react';

export default memo(function TipContainer() {
    return (
        <TipWapper>

            <div className="tip-container">
                <DiamondIcon className="tip-icon" />

                <div className='tip-text'>
                    <span className=''>흔치 않은 기회!</span>
                    <span>이 숙소는 보통 예약이 가득 차 있습니다!</span>
                </div>
            </div>

        </TipWapper>
    )
})
