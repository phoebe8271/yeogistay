import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon/arrow-left.svg?react';
import IconArrowRight from '@/assets/svg/icon/arrow-right.svg?react';

const ScrollView = memo((props) => {
    // 왼쪽, 오른쪽 버튼 보임 여부 상태
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)

    // 현재 위치 인덱스
    const [posIndex, setPosIndex] = useState(0)

    // 전체 스크롤 가능한 거리 ref (렌더링 방지용)
    const totalDistanceRef = useRef(0)

    // scroll-content 요소를 참조하기 위한 ref
    const scrollContentRef = useRef()

    // 컴포넌트가 렌더링된 후 실행되는 부분
    useEffect(() => {
        const scroll = scrollContentRef.current
        const scrollWidth = scroll.scrollWidth // 전체 콘텐츠 너비
        const clientWidth = scroll.clientWidth // 현재 보이는 영역 너비
        const totalDistance = scrollWidth - clientWidth // 스크롤 가능한 전체 거리

        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0) // 오른쪽 버튼 표시 여부 결정
        setShowLeft(false) // 처음에는 왼쪽 버튼 숨김

        scrollContentRef.current.style.transform = `translateX(0px)` // 초기 위치로 이동
        setPosIndex(0) // 인덱스 초기화
        updateArrowVisibility() // 화살표 상태 업데이트
    }, [props.children])

    // 좌우 버튼 클릭 시 실행되는 함수
    function controlClickHandle(isRight) {
        const scroll = scrollContentRef.current
        const contentEl = scroll.querySelector('.scroll-content')
        if (!contentEl) return

        let newIndex = isRight ? posIndex + 1 : posIndex - 1
        const children = contentEl.children
        const maxIndex = children.length - 1

        // 인덱스 범위 벗어나지 않게 보정
        if (newIndex < 0) newIndex = 0
        if (newIndex > maxIndex) newIndex = maxIndex

        const newEl = children?.[newIndex]
        if (!newEl) return

        const newOffsetLeft = newEl.offsetLeft
        contentEl.style.transform = `translateX(-${newOffsetLeft}px)` // 이동
        setPosIndex(newIndex) // 현재 인덱스 업데이트

        updateArrowVisibility() // 화살표 상태 업데이트
    }

    // 화살표 표시 여부를 업데이트하는 함수
    function updateArrowVisibility() {
        const scroll = scrollContentRef.current
        const contentEl = scroll.querySelector('.scroll-content')
        if (!contentEl) return

        const transform = contentEl.style.transform
        const match = /translateX\(-?(\d+)px\)/.exec(transform)
        const currentOffsetLeft = match ? parseInt(match[1], 10) : 0

        const totalDistance = scroll.scrollWidth - scroll.clientWidth

        setShowLeft(currentOffsetLeft > 0) // 왼쪽으로 이동할 여백이 있으면 표시
        setShowRight(currentOffsetLeft < totalDistance) // 오른쪽으로 이동할 여백이 있으면 표시
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

export default ScrollView
