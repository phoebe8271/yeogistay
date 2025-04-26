import React, { memo, useState } from 'react'
import { SignUpWrapper } from './style'
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import CloseIcon from '@mui/icons-material/Close';

const countries = [
    { name: '한국', code: '+82' },
    { name: '대만', code: '+886' },
    { name: '일본', code: '+81' }
]

export default memo(function SingUpPanel() {

    const [selectedCode, setSelectedCode] = useState(countries[0].code)

    const handleCountryChange = (e) => {
        const code = e.target.value
        setSelectedCode(code)
    }

    

    return (
        <SignUpWrapper>
            <div className="modal">
                <div className='signup-title'>
                    <CloseIcon className="close-btn" onClick={}/>
                    <h2>로그인 또는 회원 가입</h2>
                </div>
                <h3>여기스테이에 오신 것을 환영합니다.</h3>

                <div className="form">
                    <label>국가/지역</label>
                    <select onChange={handleCountryChange}>
                        {countries.map((item) => (
                            <option key={item.code} value={item.code}>
                                {item.name} ({item.code})
                            </option>
                        ))}
                    </select>

                    <label>전화번호</label>
                    <input type="tel" placeholder={selectedCode} />

                    <p className="notice">
                        전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.{' '}
                        <a href="#">개인정보 처리방침</a>
                    </p>

                    <button className="continue">계속</button>
                </div>

                <div className="divider">또는</div>

                <div className="social">
                    <button><SiNaver /> 네이버로 로그인하기</button>
                    <button><FaGoogle /> 구글로 로그인하기</button>
                    <button><FaApple /> 애플로 로그인하기</button>
                    <button><MdEmail /> 이메일로 로그인하기</button>
                    <button><FaFacebook /> 페이스북으로 로그인하기</button>
                </div>
            </div>

        </SignUpWrapper>
    )
})
