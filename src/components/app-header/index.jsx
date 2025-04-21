import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left/index'
import HeaderCenter from './c-cpns/header-center/index'
import HeaderRight from './c-cpns/header-right/index'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function AppHeader() {
  // 定義組件內部的狀態
  const [isSearch, setIsSearch] = useState(false) // 是否在搜索狀態

  // 從 reduex 中獲取數據
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed } = headerConfig
  

  console.log('AppHeader isSearch:', isSearch)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className='header-content'>
        <div className='content-top'>
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={() => setIsSearch(true)} />
          <HeaderRight />
        </div>
        <SearchAreaWrapper $isSearch={isSearch} />
      </div>

      {isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})
