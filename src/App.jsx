import React, { memo } from 'react'
import { useRoutes } from "react-router-dom";
import routes from '@/router/index';
import AppHeader from '@components/app-header/index';
import AppFooter from '@components/app-footer/index';
import useScrollTop from '@/hooks/useScrollTop';


export default memo(function App() {

  // 페이지가 바뀔 때마다 자동으로 맨 위로 스크롤 (커스텀 Hook으로 구현)
  useScrollTop()

  return (
    <div className='app'>
      
      {/* 헤더 렌더링 */}
      <AppHeader />
      
      {/* 라우트 설정에 따라 페이지 렌더링 */}
      <div className='page'>
        {useRoutes(routes)}
      </div>
      
      {/* 푸터 렌더링 */}
      <AppFooter />
    </div>
  )
})

