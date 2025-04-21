import React, { memo, useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group";

import SearchTitles from '@/assets/data/search_titles.json'
import { CenterWrapper } from './style'
import SearchIcon from '@/assets/svg/icon/header-search.svg?react';
import SearchTabs from './c-cpns/search-tabs/index';
import SearchSections from './c-cpns/search-sections/index';


export default memo(function HeaderCenter(props) {
    const { isSearch, searchBarClick } = props
    const [tabIndex, setTabIndex] = useState(0)
    // 過濾數據
    const titles = SearchTitles.map(item => item.title)

    const barRef = useRef(null)
    const detailRef = useRef(null)

    // 事件處理
    function searchBarClickHandle() {
        if (searchBarClick) searchBarClick()
    }

    return (
        <CenterWrapper>
            <CSSTransition
                in={!isSearch}
                classNames='bar'
                timeout={250}
                unmountOnExit={true} // 自動卸載組件
                nodeRef={barRef}
            >
                <div className='search-bar' onClick={searchBarClickHandle} ref={barRef}>
                    <div className='left'>여행지</div>
                    <div className="divider-left" />

                    <div className='center'>날짜</div>
                    <div className="divider-right" />

                    <div className='right-wrap'>
                        <div className='right'>게스트 추가</div>
                        <div className='searchicon'><SearchIcon /></div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={isSearch}
                classNames='detail'
                timeout={250}
                unmountOnExit={true} // 自動卸載組件
                nodeRef={detailRef}
            >
                <div className='search-detail' ref={detailRef}>
                    <SearchTabs titles={titles} tabClick={setTabIndex} />
                    <div className='infos'>
                        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
                    </div>

                </div>
            </CSSTransition>

        </CenterWrapper >
    )

})
