import React, { memo } from 'react'
import { LeftWrapper } from './style'
import LogoIcon from '@/assets/svg/logo.svg?react';
import { useNavigate } from 'react-router-dom';

export default memo(function HeaderLeft() {

    const navigate = useNavigate()
    function logoCLickHandle() {
        navigate("/home")
    }
    return (
        <LeftWrapper>
            <LogoIcon className='logo' onClick={logoCLickHandle} />

        </LeftWrapper>
    )
})
