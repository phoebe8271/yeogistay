import { useEffect, useState } from "react";
import { throttle } from "underscore"; // 做節流

export default function useScrollPosition() {
    // 狀態來記錄位置
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // 監聽 window 滾動
    useEffect(() => {
        const handleScroll = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100) // 節流

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // 返回
    return { scrollX, scrollY }
}