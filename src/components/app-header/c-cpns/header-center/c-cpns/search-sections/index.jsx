import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { SearchSectionsWrapper } from './style'

const SearchSections = memo((props) => {
    const { searchInfos, onSectionClick, activeIndex } = props

    return (
        <SearchSectionsWrapper>
            {
                searchInfos.map((item, index) => {
                    return (
                        <div
                            className={classNames('item', { active: activeIndex === index })}
                            key={index}
                            onClick={() => onSectionClick(index)}
                        >
                            <div className='info'>
                                <div className='title'>{item.title}</div>
                                <div className='desc'>{item.desc}</div>
                            </div>
                            {index !== searchInfos.length - 1 && <div className='divider'></div>}
                        </div>
                    )
                })
            }
        </SearchSectionsWrapper>
    )
})

SearchSections.propTypes = {
    searchInfos: PropTypes.array,
    onSectionClick: PropTypes.func
}

export default SearchSections
