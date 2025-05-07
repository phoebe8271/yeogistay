import React, { memo, useState } from 'react'
import { GuestSelectorWrapper } from './style'


const GuestItem = ({ label, desc, count, setCount }) => {
    
    const handleDecrease = () => {
        if (count > 0) setCount(count - 1)
    }

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div className="guest-item">
            <div className="info">
                <div className="label">{label}</div>
                <div className="desc">{desc}</div>
            </div>
            <div className="control">
                <button onClick={handleDecrease} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default memo(function GuestSelector() {
    // 상태 관리, 각 타입별 인원 수 useState로 관리
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const [pets, setPets] = useState(0)
    
    return (
        <GuestSelectorWrapper>
            <GuestItem label="성인" desc="13세 이상" count={adults} setCount={setAdults} />
            <GuestItem label="어린이" desc="2~12세" count={children} setCount={setChildren} />
            <GuestItem label="유아" desc="2세 미만" count={infants} setCount={setInfants} />
            <GuestItem label="반려동물" desc="보조동물을 동반하시나요?" count={pets} setCount={setPets} />
        </GuestSelectorWrapper>
    )
})
