import React, { memo, useState } from 'react'
import { SignUpWrapper } from './style'
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import CloseIcon from '@mui/icons-material/Close';

// 국가/지역 코드 목록
const countries = [
    { name: '한국', code: '+82' },
    { name: '대만', code: '+886' },
    { name: '일본', code: '+81' }
]

export default memo(function SingUpPanel({ onClose }) {

    const [selectedCode, setSelectedCode] = useState(countries[0].code) // 국가 코드
    const [phoneNumber, setPhoneNumber] = useState('') // 입력한 전화번호
    const [errorMessage, setErrorMessage] = useState('') // 오류 메시지
    const [step, setStep] = useState('inputPhone') // 현재 단계 'inputPhone' ➔ 'verify' ➔ 'success'
    const [timer, setTimer] = useState(60) // 타이머
    const [verificationCode, setVerificationCode] = useState('') // 인증번호
    const [canResend, setCanResend] = useState(false) // 재발송 가능 여부

    // 사용자가 선택한 국가 코드 업데이트.
    const handleCountryChange = (e) => {
        const code = e.target.value
        setSelectedCode(code)
    }

    const handlePhoneChange = (e) => {
        // 전화번호 숫자만 허용, 최대 10자리 제한.
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 10) value = value.slice(0, 10);
        setPhoneNumber(value);
    }

    // 전화번호 형식 검사(10자리, 10으로 시작), 통과하면 인증 단계로 전환하고 타이머 시작.
    const handleSubmitPhone = () => {
        if (phoneNumber.length !== 10 || !phoneNumber.startsWith('10')) {
            setErrorMessage('전화번호는 10자리이고 10으로 시작해야 합니다.');
        } else {
            setErrorMessage('');
            setStep('verify');
            startTimer();
        }
    }

    // 입력한 인증번호 6자리 영숫자만 허용
    const handleVerificationChange = (e) => {
        let value = e.target.value.replace(/[^a-zA-Z0-9]/g, ''); // 영숫자만 허용
        if (value.length > 6) value = value.slice(0, 6);
        setVerificationCode(value);
    }

    // 인증번호 길이 확인, 6자리면 성공, 아니면 알림 표시.
    const handleSubmitVerification = () => {
        if (verificationCode.length === 6) {
            setStep('success');
        } else {
            alert('인증번호 6자리를 입력하세요!');
        }
    }

    // 60초 타이머 시작, 끝나면 재발송 가능 설정.
    const startTimer = () => {
        let countdown = 60;
        setTimer(countdown);
        setCanResend(false); 

        const interval = setInterval(() => {
            countdown -= 1;
            setTimer(countdown);
            if (countdown <= 0) {
                clearInterval(interval);
                setCanResend(true); // 재발송
            }
        }, 1000);
    }

    // 타이머 재시작 및 알림 표시.
    const handleResendCode = () => {
        startTimer(); 
        alert('인증번호가 다시 전송되었습니다!');
    }

    return (
        <SignUpWrapper onClick={(e) => e.stopPropagation()}>
            <div className="modal">
                <div className='signup-title'>
                    <CloseIcon className="close-btn" onClick={onClose} />
                    <h2>
                        {step === 'inputPhone' && '로그인 또는 회원 가입'}
                        {step === 'verify' && '인증번호를 입력하세요'}
                        {step === 'success' && '회원 가입 완료!'}
                    </h2>
                </div>

                {step === 'inputPhone' && (
                    <>
                        <h3>여기스테이에 오신 것을 환영합니다.</h3>

                        <div className="form">
                            <label>국가/지역</label>
                            <select onChange={handleCountryChange} value={selectedCode}>
                                {countries.map((item) => (
                                    <option key={item.code} value={item.code}>
                                        {item.name} ({item.code})
                                    </option>
                                ))}
                            </select>

                            <label>전화번호</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder="전화번호를 입력하세요" />

                            <p className={`notice ${errorMessage ? 'error' : ''}`}>
                                {errorMessage ? errorMessage : '전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. 개인정보 처리방침'}
                            </p>

                            <button className="continue" onClick={handleSubmitPhone}>계속</button>
                        </div>

                        <div className="divider">또는</div>

                        <div className="social">
                            <button><SiNaver /> 네이버로 로그인하기</button>
                            <button><FaGoogle /> 구글로 로그인하기</button>
                            <button><FaApple /> 애플로 로그인하기</button>
                            <button><MdEmail /> 이메일로 로그인하기</button>
                            <button><FaFacebook /> 페이스북으로 로그인하기</button>
                        </div>
                    </>
                )}


                {step === 'verify' && (
                    <>
                        <div className="form">
                            <label>인증번호</label>
                            <input
                                type="text"
                                value={verificationCode}
                                onChange={handleVerificationChange}
                                placeholder="6자리 문자 또는 숫자"
                                maxLength={6} />
                            {/* 顯示倒數或重新發送 */}
                            {!canResend ? (
                                <p className="notice">남은 시간: {timer}초</p>
                            ) : (
                                <p className="notice">
                                    <button onClick={handleResendCode} className="resend-btn">
                                        인증번호 재발송
                                    </button>
                                </p>
                            )}

                            <button className="continue" onClick={handleSubmitVerification}>계속</button>
                        </div>
                    </>
                )}


                {step === 'success' && (
                    <>
                        <div className="form">
                            <p>여기스테이에 가입해주셔서 감사합니다.</p>
                            <button className="continue" onClick={onClose}>닫기</button>
                        </div>
                    </>
                )}
            </div>


        </SignUpWrapper>
    )
})
