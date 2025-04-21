import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {

    const { selectIndex = 0 } = props
    const contentRef = useRef()

    useEffect(() => {
        // console.log(selectIndex, 'useEffect'); // test
        const container = contentRef.current
        if (!container) return

        // 1. 獲取 selectIndex 對應的 item
        const selectItemEl = contentRef.current.children[selectIndex]
        if (!selectItemEl) return

        // console.log(selectIndex,selectItemEl); // test

        const itemLeft = selectItemEl.offsetLeft // position: relative;
        // console.log(itemLeft); // test

        const itemWidth = selectItemEl.clientWidth

        // 2. 獲取 indicator-list 的寬度
        const indicatorContenttWidth = contentRef.current.clientWidth
        // console.log(itemLeft, itemWidth, indicatorContenttWidth); // test
        const contentScrollWidth = contentRef.current.scrollWidth

        // 3.獲取 selectIndex 要滾動的距離
        let distance = itemLeft + itemWidth * 0.5 - indicatorContenttWidth * 0.5
        // console.log(distance); // test

        // 4. 左右兩邊不需要移動至中間的特殊情況判斷
        if (distance < 0) distance = 0 // 判斷左邊特殊情況處理
        const totalDistance = contentScrollWidth - indicatorContenttWidth
        if (distance > totalDistance) distance = totalDistance // 判斷右邊特殊情況處理

        // 5. 改變位置即可
        contentRef.current.style.transform = `translate(${-distance}px)`

    }, [selectIndex])

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
