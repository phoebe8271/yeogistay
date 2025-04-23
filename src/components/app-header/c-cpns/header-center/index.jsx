import React, { memo, useEffect, useRef, useState } from 'react'
import { CSSTransition } from "react-transition-group";

import SearchTitles from '@/assets/data/search_titles.json'
import { CenterWrapper } from './style'
import SearchIcon from '@/assets/svg/icon/header-search.svg?react';
import SearchTabs from './c-cpns/search-tabs/index';
import SearchSections from './c-cpns/search-sections/index';
import Locationselector from './c-cpns/search-extra-panel/locationselector/index';
import Dateselector from './c-cpns/search-extra-panel/dateselector/index';
import Guestselector from './c-cpns/search-extra-panel/guestselector/index';


export default memo(function HeaderCenter(props) {
    const { isSearch, searchBarClick } = props
    const [tabIndex, setTabIndex] = useState(0)

    const [panelIndex, setPanelIndex] = useState(-1) // 面板
    // -1 = 沒開啟，0 = 地點面板，1 = 日期面板，2 = 人數面板

    // 點擊面板中的哪一個 item 
    const [activeSectionIndex, setActiveSectionIndex] = useState(-1)

    // 外部點擊時關閉浮框
    useEffect(() => {
        function handleClickOutside(e) {
            const isInsideDetail = detailRef.current?.contains(e.target)
            const isInsideBar = barRef.current?.contains(e.target)
            const isInsidePanel = panelRef.current?.contains(e.target)

            if (isInsideDetail || isInsideBar || isInsidePanel) {
                return
            }

            // 點擊外部，關閉浮框
            setPanelIndex(-1)
            setActiveSectionIndex(-1)
        }

        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // 過濾數據
    const titles = SearchTitles.map(item => item.title)

    const barRef = useRef(null)
    const detailRef = useRef(null)
    const panelRef = useRef(null)

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
                        <SearchSections
                            searchInfos={SearchTitles[tabIndex].searchInfos}
                            onSectionClick={(index) => {
                                setPanelIndex(index)
                                setActiveSectionIndex(index)
                            }}
                            activeIndex={activeSectionIndex}
                        />
                    </div>

                    {panelIndex === 0 && <Locationselector ref={panelRef} />}
                    {panelIndex === 1 && <Dateselector ref={panelRef} />}
                    {panelIndex === 2 && <Guestselector ref={panelRef} />}

                </div>
            </CSSTransition>

        </CenterWrapper >
    )

})
