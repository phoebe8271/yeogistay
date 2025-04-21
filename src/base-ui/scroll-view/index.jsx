import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon/arrow-left.svg?react';
import IconArrowRight from '@/assets/svg/icon/arrow-right.svg?react';

const ScrollView = memo((props) => {
    // 定義內部的狀態
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const totalDistanceRef = useRef(0)

    // 組件渲染完畢，判斷是否顯示右側按鈕
    const scrollContentRef = useRef()
    useEffect(() => {
        // const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滾動的寬度
        // const clientWidth = scrollContentRef.current.clientWidth; // 本身佔據的寬度
        // const totalDistance = scrollWidth - clientWidth;

        const scroll = scrollContentRef.current
        const scrollWidth = scroll.scrollWidth
        const clientWidth = scroll.clientWidth
        const totalDistance = scrollWidth - clientWidth

        totalDistanceRef.current = totalDistance;
        setShowRight(totalDistance > 0);
        setShowLeft(false);

        scrollContentRef.current.style.transform = `translateX(0px)`
        setPosIndex(0)
    }, [props.children])

    // 事件處理邏輯 
    function controlClickHandle(isRight) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        if (newIndex < 0) return

        const contentEl = scrollContentRef.current.querySelector('.scroll-content')
        if (!contentEl) return

        const children = contentEl.children
        const newEl = children?.[newIndex]
        if (!newEl) return

        const newOffsetLeft = newEl.offsetLeft
        contentEl.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        // 是否繼續顯示左側的按鈕
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
    }

    return (
        <ScrollViewWrapper>
            {showLeft && (
                <div className='control left' onClick={() => controlClickHandle(false)}>
                    <IconArrowLeft />
                </div>
            )}


            {showRight && (
                <div className='control right' onClick={() => controlClickHandle(true)}>
                    <IconArrowRight />
                </div>
            )}

            <div className='scroll' ref={scrollContentRef}>
                <div className='scroll-content'>
                    {props.children}
                </div>
            </div>
        </ScrollViewWrapper>
    )
})

ScrollView.propTypes = {

}

export default ScrollView
