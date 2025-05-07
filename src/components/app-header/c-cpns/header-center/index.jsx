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
    const [tabIndex, setTabIndex] = useState(0) // 현재 선택한 탭 인덱스를 기록

    // -1=닫힘, 0=위치, 1=날짜, 2=게스트
    const [panelIndex, setPanelIndex] = useState(-1) 

    // 현재 클릭한 섹션 인덱스
    const [activeSectionIndex, setActiveSectionIndex] = useState(-1)

    //  useRef로 세 가지 DOM 영역 연결
    const barRef = useRef(null)
    const detailRef = useRef(null)
    const panelRef = useRef(null)

    //  외부 클릭 시 자동으로 패널 닫기
    useEffect(() => {
        function handleClickOutside(e) {
            const isInsideDetail = detailRef.current?.contains(e.target)
            const isInsideBar = barRef.current?.contains(e.target)
            const isInsidePanel = panelRef.current?.contains(e.target)

            // 패널 또는 검색바 영역 클릭상태면 무시
            if (isInsideDetail || isInsideBar || isInsidePanel) {
                return
            }

            // 외부 클릭 → 패널 닫고 section 인덱스 초기화
            setPanelIndex(-1)
            setActiveSectionIndex(-1)
        }

        // 이벤트 리스너 등록
        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            // 컴포넌트 언마운트 시 이벤트 제거 (메모리 누수 방지)
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // json 파일에서 탭 제목 배열 추출
    const titles = SearchTitles.map(item => item.title)

    // 검색 바 클릭 시 외부에서 넘겨준 이벤트 실행
    function searchBarClickHandle() {
        if (searchBarClick) searchBarClick()
    }

    return (
        <CenterWrapper>

            {/* 검색 바 닫힘 상태 → 여행지/날짜/게스트 추가 기본 표시 */}
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

            {/* 검색 바 열림 상태 → 탭 및 세부 선택 패널 표시 */}
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

                    {/* panelIndex 값에 따라 어떤 패널을 보여줄지 결정 */}
                    {panelIndex === 0 && <Locationselector ref={panelRef} />}
                    {panelIndex === 1 && <Dateselector ref={panelRef} />}
                    {panelIndex === 2 && <Guestselector ref={panelRef} />}

                </div>
            </CSSTransition>

        </CenterWrapper >
    )

})
