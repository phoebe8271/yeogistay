import React, { memo } from 'react'
import { LeftWrapper } from './style'
import LogoIcon from '@/assets/svg/logo.svg?react';
import { useNavigate } from 'react-router-dom';

export default memo(function HeaderLeft() {

    // useNavigate로 네비게이션 함수 가져오기
    const navigate = useNavigate()
    
    // 로고 클릭 시 /home 페이지로 이동
    function logoCLickHandle() {
        navigate("/home")
    }
    
    return (
        <LeftWrapper>
            <LogoIcon className='logo' onClick={logoCLickHandle} />
        </LeftWrapper>
    )
})
