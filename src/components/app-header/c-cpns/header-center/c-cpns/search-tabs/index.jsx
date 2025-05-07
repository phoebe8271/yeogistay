import classNames from 'classnames'
import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { SearchTabsWrapper } from './style'


// 탭을 클릭할 때 활성화 상태 관리
const SearchTabs = memo((props) => {
    const { titles, tabClick } = props

    // 현재 선택된 탭 인덱스를 관리하는 상태
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle(index) {
        setCurrentIndex(index)
        if (tabClick) tabClick(index) // 탭 클릭 시 상태 업데이트 및 부모로 콜백 전달
    }

    return (
        <SearchTabsWrapper>
            {
                titles.map((item, index) => {
                    return (
                        <div
                            className={classNames("item", { active: currentIndex === index })}
                            key={item}
                            onClick={() => itemClickHandle(index)}
                        >
                            <span className='text'>{item}</span>
                        </div>
                    )
                })
            }
        </SearchTabsWrapper>
    )
})

SearchTabs.propTypes = {
    titles: PropTypes.array

}

export default SearchTabs
