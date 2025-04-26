import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import LanguageIcon from '@/assets/svg/icon/header-language.svg?react';
import UserProfileIcon from '@/assets/svg/icon/header-userprofile.svg?react';
import UserMenuIcon from '@/assets/svg/icon/header-usermenu.svg?react';
import SingUpPanel from './c-cpns/signup/index';

export default memo(function HeaderRight() {
    const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {
        function windowHandleClick() {
            setShowPanel(false)
        }
        window.addEventListener("click", windowHandleClick, true)

        return () => {
            window.removeEventListener("click", windowHandleClick, true)
        }
    }, [])

    function profileClickHandle() {
        setShowPanel(true)
    }


    return (
        <RightWrapper>
            <div className='btns'>
                <span className='btn'>로그인</span>
                <span className='btn'>회원 가입</span>
            </div>

            <div className='languagebtn'>
                <LanguageIcon className='language' />
            </div>

            <div className='profile' onClick={profileClickHandle}>
                <UserMenuIcon className='usermenu' />
                <UserProfileIcon className='userprofile' />

                {showPanel && (
                    <div className='panel'>
                        <div className='top'>
                            <div className='item register'>회원 가입</div>
                            <div className='item login'>로그인</div>
                        </div>
                        <div className='bottom'>
                            <div className='item'>당신의 공간을 여기스테이하세요</div>
                            <div className='item'>체험 호스팅하기</div>
                            <div className='item'>도움말 센터</div>
                        </div>
                    </div>
                )}

                {/* <SingUpPanel/> */}
            </div>
        </RightWrapper>
    )
})
