import React, { memo } from 'react'
import { useRoutes } from "react-router-dom";
import routes from '@/router/index';
import AppHeader from '@components/app-header/index';
import AppFooter from '@components/app-footer/index';
import useScrollTop from '@/hooks/useScrollTop';


export default memo(function App() {

  // 當頁面發生切換的時候，將瀏覽器滾到頂部(已封裝成一個 Hook)
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

