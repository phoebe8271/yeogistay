import React from "react";
import { Navigate } from "react-router-dom";

// React.lazy로 페이지 컴포넌트 동적 로드 (코드 분할, 레이지 로딩)
const Home = React.lazy(() => import("@/views/home"))
const Detail = React.lazy(() => import("@/views/detail"))
const Entire = React.lazy(() => import("@/views/entire"))


const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/detail/:id",
        element: <Detail />
    },
    {
        path: "/entire",
        element: <Entire />
    }
]

export default routes
