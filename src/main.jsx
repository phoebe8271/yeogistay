import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import 'normalize.css'; // 스타일 초기화
import "./assets/CSS/index.less";
import App from '@/App';
import store from './store/';
import theme from '@/assets/theme/index';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // suspense: Suspense로 비동기 로딩 대기화면 제공
  // provider: 전체 앱에 Redux store 제공
  // ThemeProvider：styled-components 提供的主題容器，用來統一元件內的樣式與顏色。
  <Provider store={store}>
    <Suspense fallback="loading...">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </StrictMode>
)

