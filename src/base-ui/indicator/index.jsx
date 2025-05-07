import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {

    const { selectIndex = 0 } = props
    const contentRef = useRef()

    useEffect(() => {
        // selectIndex가 변경될 때마다 스크롤 로직 실행


        const container = contentRef.current
        if (!container) return

        // 1. 선택된 인덱스에 해당하는 item 요소 가져오기
        const selectItemEl = contentRef.current.children[selectIndex]
        if (!selectItemEl) return
        // console.log(selectIndex,selectItemEl); // test

        // item의 부모 요소로부터 왼쪽 거리
        const itemLeft = selectItemEl.offsetLeft // position: relative;
        // console.log(itemLeft); // test

        const itemWidth = selectItemEl.clientWidth // item의 너비

        // 2. indicator-content의 표시 영역 너비
        const indicatorContenttWidth = contentRef.current.clientWidth
        const contentScrollWidth = contentRef.current.scrollWidth // 전체 스크롤 가능한 너비

        // 3.선택된 item을 중앙으로 이동시키기 위한 스크롤 거리 계산
        let distance = itemLeft + itemWidth * 0.5 - indicatorContenttWidth * 0.5
        // console.log(distance); // test

        // 4. 특수 상황 처리: 왼쪽/오른쪽 경계
        if (distance < 0) distance = 0  // 왼쪽 끝: 이동하지 않음

        const totalDistance = contentScrollWidth - indicatorContenttWidth
        if (distance > totalDistance) distance = totalDistance // 오른쪽 끝: 초과 이동하지 않음
        
        // 5. transform 속성을 설정하여 스크롤 효과 구현
        contentRef.current.style.transform = `translate(${-distance}px)`

    }, [selectIndex]) // selectIndex 변경 시에만 실행

    return (
        <IndicatorWrapper>
            <div className='indicator-content' ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator
