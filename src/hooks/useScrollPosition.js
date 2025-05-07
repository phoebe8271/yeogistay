import { useEffect, useState } from "react";
import { throttle } from "underscore"; // 스로틀 처리

export default function useScrollPosition() {
    // 현재 스크롤 위치를 상태로 기록
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // window 스크롤 이벤트 감지
    useEffect(() => {
        const handleScroll = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100) // 100ms마다 한 번 실행 (스로틀)

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // scrollX, scrollY를 외부로 반환
    return { scrollX, scrollY }
}