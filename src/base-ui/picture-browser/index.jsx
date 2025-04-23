import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon/close.svg?react';
import IconArrowLeft from '@/assets/svg/icon/arrow-left.svg?react';
import IconArrowRight from '@/assets/svg/icon/arrow-right.svg?react';
import IconTriangleDown from '@/assets/svg/icon/triangle-down.svg?react';
import IconTriangleUp from '@/assets/svg/icon/triangle-up.svg?react';
import Indicator from '@/base-ui/indicator/index';


const PictureBrowser = memo((props) => {
    const { pictureUrls, closeClick } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [showPicList, setShowPicList] = useState(true)


    // 當圖片瀏覽器顯示出來時，滾動功能消失
    useEffect(() => {
        document.body.style.overflow = 'hidden' // 超出部分隱藏 無滾動條
        return () => {
            document.body.style.overflow = 'auto' // 關掉瀏覽器後 開啟滾動
        }
    }, [])

    // 事件監聽的邏輯
    function closeBtnClickHandle() {
        if (closeClick) closeClick();
    }

    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0) newIndex = pictureUrls.length - 1
        if (newIndex > pictureUrls.length - 1) newIndex = 0

        setIsNext(isNext)
        setCurrentIndex(newIndex)
    }

    function indicatorItemClickHandle(index) {
        setIsNext(index > currentIndex)
        setCurrentIndex(index)
    }

    return (
        <BrowserWrapper $isNext={isNext} $showPicList={showPicList}>
            <div className='picturebrowser-top'>
                <div className='close-btn' onClick={closeBtnClickHandle} >
                    <IconClose width="40" height="40" />
                </div>
            </div>

            <div className='picturebrowser-slider'>
                <div className='slider-control'>
                    <div className='btn left' onClick={() => controlClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className='btn right' onClick={() => controlClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>

                <div className="pictures">
                    <div className="pic-wrapper">
                        <img src={`http://localhost:1337${pictureUrls[currentIndex]?.formats?.medium?.url}`} alt="" />
                    </div>
                </div>
            </div>
            <div className='picturebrowser-preview'>
                <div className='preview-info'>
                    <div className='preview-desc'>
                        <div className='preview-count'>
                            <span className='previewdesc-l'>{currentIndex + 1} / {pictureUrls.length} :</span>
                            <span className='previewdesc-l'>사진{currentIndex + 1}</span>
                        </div>

                        <div className='preview-toggle' onClick={() => setShowPicList(!showPicList)}>
                            <span>{showPicList ? "사진 목록 숨기기" : "사진 목록 보기"}</span>
                            {showPicList ? <IconTriangleDown className='icontriangledown' /> : <IconTriangleUp className='icontriangleup' />}


                        </div>
                    </div>

                    <div className='preview-indicator'>
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div className={classNames('item', { active: currentIndex === index })}
                                            key={item.id || index}
                                            onClick={() => indicatorItemClickHandle(index)}
                                        >
                                            <img src={`http://localhost:1337${item?.formats?.medium?.url}`} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>

                </div>
            </div>


        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array

}

export default PictureBrowser
