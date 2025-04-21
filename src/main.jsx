import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import 'normalize.css';
import "./assets/CSS/index.less";
import App from '@/App';
import store from './store/';
import theme from '@/assets/theme/index';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // suspense 異步加載(某些頁面是異步加載，打包的時候 import => wepack => 單獨打包 js 文件 ｜ home/entire/detail => 單獨的 js 文件)
  <Provider store={store}>
    <Suspense fallback="loading...">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </StrictMode>
)

