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
    const { pictureUrls, closeClick } = props // 부모 컴포넌트로부터 이미지 리스트와 닫기 함수 받기

    const [currentIndex, setCurrentIndex] = useState(0) // 현재 표시 중인 이미지 인덱스
    const [isNext, setIsNext] = useState(true) // 현재 방향이 오른쪽(true)인지 왼쪽(false)인지 저장
    const [showPicList, setShowPicList] = useState(true) // 하단 썸네일 목록 표시 여부

    // 이미지 브라우저 열리면 body 스크롤 비활성화
    useEffect(() => {
        document.body.style.overflow = 'hidden'  // 이미지 브라우저 열릴 때 → 스크롤 바 숨김
        return () => {
            document.body.style.overflow = 'auto' // 브라우저 닫히면 스크롤 복구
        }
    }, [])


    function closeBtnClickHandle() {
        if (closeClick) closeClick();
        // 닫기 버튼 클릭 시 부모 컴포넌트의 closeClick 호출
    }

    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1

        // 범위를 벗어나면 순환하도록 처리
        if (newIndex < 0) newIndex = pictureUrls.length - 1 // 인덱스가 0보다 작으면 마지막 인덱스로 순환
        if (newIndex > pictureUrls.length - 1) newIndex = 0 // 인덱스가 최대값보다 크면 처음 인덱스로 순환

        // 상태 업데이트
        setIsNext(isNext)
        setCurrentIndex(newIndex)
    }

    // Indicator 항목 클릭 시 인덱스에 따라 이미지 전환
    function indicatorItemClickHandle(index) {
        setIsNext(index > currentIndex) // isNext = true(오른쪽); isNext = false(왼쪽)
        setCurrentIndex(index)
    }

    return (
        <BrowserWrapper $isNext={isNext} $showPicList={showPicList}>
            
            {/* 상단 닫기 버튼 */}
            <div className='picturebrowser-top'>
                <div className='close-btn' onClick={closeBtnClickHandle} >
                    <IconClose width="40" height="40" />
                </div>
            </div>

            {/* 좌/우 화살표 컨트롤 */}
            <div className='picturebrowser-slider'>
                <div className='slider-control'>

                    <div className='btn left' onClick={() => controlClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className='btn right' onClick={() => controlClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>

                {/* 현재 이미지 표시 */}
                <div className="pictures">
                    <div className="pic-wrapper">
                        <img src={`http://localhost:1337${pictureUrls[currentIndex]?.formats?.medium?.url}`} alt="" />
                    </div>
                </div>
            </div>

            {/* 썸네일 indicator */}
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
