import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지가 변경될 때마다 브라우저를 맨 위로 스크롤
export default function useScrollTop() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    },[location.pathname]) // 라우트 경로가 바뀔 때마다 실행
}