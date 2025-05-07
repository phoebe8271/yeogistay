import React, { memo, useRef, useState } from 'react'
import classNames from 'classnames'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left/index'
import HeaderCenter from './c-cpns/header-center/index'
import HeaderRight from './c-cpns/header-right/index'
import { shallowEqual, useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

export default memo(function AppHeader() {
  // 검색창 표시 여부를 관리하는 내부 상태
  const [isSearch, setIsSearch] = useState(false) 


  // Redux에서 header 설정값 (고정 여부, 투명 여부) 가져오기
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig

  // 커스텀 hook으로 현재 스크롤 위치 가져오고, ref로 이전 위치 저장
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  

  // 검색창이 열려 있지 않을 때 이전 스크롤 위치 계속 기록
  if (!isSearch) prevY.current = scrollY

  // 검색창 열려 있고 스크롤이 30px 이상 움직이면 자동으로 검색창 닫기
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // topAlpha가 켜져 있고 스크롤이 맨 위일 때 헤더 투명 상태 적용
  const isAlpha = topAlpha && scrollY === 0



  return (
    // styled-components로 테마 값 전달 (투명 여부)
    <ThemeProvider theme={{ isAlpha }}>

      {/* isFixed가 true면 fixed 클래스 적용 */}
      <HeaderWrapper className={classNames({ fixed: isFixed })}> 
        
        <div className='header-content'>
          <div className='content-top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={() => setIsSearch(true)} />
            <HeaderRight />
          </div>
          {/* $isSearch로 검색 배경 영역 스타일 제어 */}
          <SearchAreaWrapper $isSearch={isAlpha || isSearch} />
        </div>

        {/* 검색창 열리면 커버 레이어 렌더링, 클릭 시 검색창 닫기 */}
        {isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})