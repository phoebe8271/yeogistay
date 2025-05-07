import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import LanguageIcon from '@/assets/svg/icon/header-language.svg?react';
import UserProfileIcon from '@/assets/svg/icon/header-userprofile.svg?react';
import UserMenuIcon from '@/assets/svg/icon/header-usermenu.svg?react';
import SingUpPanel from './c-cpns/signup/index';
import './signup-overlay.css'

export default memo(function HeaderRight() {
    const [showPanel, setShowPanel] = useState(false); // 드롭다운 패널 표시 여부
    const [showSignup, setShowSignup] = useState(false); // 회원가입 패널 표시 여부

    useEffect(() => {
        function windowHandleClick(event) {
            const panel = document.querySelector('.panel');
            const profile = document.querySelector('.profile');

            if (panel && panel.contains(event.target)) return; // 패널 내부 클릭이면 무시
            if (profile && profile.contains(event.target)) return; // 패널 영역 클릭이면 무시

            setShowPanel(false); // 다른 곳 클릭 시 → 패널 닫기
        }

        window.addEventListener('click', windowHandleClick, true);

        return () => {
            window.removeEventListener('click', windowHandleClick, true);
        };
    }, []);

    // 프로필 아이콘 클릭 시 → 패널 열기
    function profileClickHandle() {
        setShowPanel(true)
    }

    return (
        <RightWrapper>
            <div className='btns'>
                <span className='btn'>로그인</span>
                <span className='btn' onClick={() => setShowSignup(true)}>회원 가입</span>
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
                            <div
                                className='item register'
                                onClick={(e) => {
                                    e.stopPropagation();  // 이벤트 버블링을 막아 상위 이벤트 실행 방지
                                    setShowSignup(true);
                                    setShowPanel(false);
                                }}>회원 가입</div>
                            <div className='item login'
                                onClick={(e) => {
                                    e.stopPropagation();  // 이벤트 버블링을 막아 상위 이벤트 실행 방지
                                    setShowSignup(true);
                                    setShowPanel(false);
                                }}>로그인</div>
                        </div>
                        <div className='bottom'>
                            <div className='item'>당신의 공간을 여기스테이하세요</div>
                            <div className='item'>체험 호스팅하기</div>
                            <div className='item'>도움말 센터</div>
                        </div>
                    </div>
                )}
                {showSignup && (
                    <div className="signup-overlay">
                        <SingUpPanel onClose={() => setShowSignup(false)} />
                    </div>
                )}
            </div>
        </RightWrapper>
    )
})
