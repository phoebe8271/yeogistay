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
  // 定義組件內部的狀態
  const [isSearch, setIsSearch] = useState(false) // 是否在搜索狀態


  // 從 reduex 中獲取數據
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig

  // 監聽滾動
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  

  // 在正常滾動的情況下(搜索窗沒彈出來)，不斷紀錄滾動距離
  if (!isSearch) prevY.current = scrollY
  // 在彈出搜索窗的情況下，滾動的距離大於之前紀錄的距離 30px 時就關閉搜索窗
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // 透明度的邏輯
  const isAlpha = topAlpha && scrollY === 0



  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='header-content'>
          <div className='content-top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={() => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper $isSearch={isAlpha || isSearch} />
        </div>

        {isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})
