import classNames from 'classnames'
import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { SearchTabsWrapper } from './style'

const SearchTabs = memo((props) => {
    const { titles, tabClick } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle(index) {
        setCurrentIndex(index)
        if (tabClick) tabClick(index)
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
