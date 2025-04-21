import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 當頁面發生切換的時候，將瀏覽器滾到頂部
export default function useScrollTop() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    },[location.pathname])
}