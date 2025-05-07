// 이 함수는 전달된 값이 '배열이 아닌 객체'인지 그리고 '최소한 하나의 key가 있는지'를 확인하는 함수입니다.
export function hasObjectValue(obj) {
    // console.log("[hasObjectValue 검사] 전달된 값:", obj)
    const isObject = typeof obj === 'object' && obj !== null && !Array.isArray(obj) // 객체인지 여부 확인
    const hasKeys = isObject && Object.keys(obj).length > 0 // 객체에 key가 하나 이상 존재하는지 확인
  
    return hasKeys // true or false 반환
  }

// API 응답 데이터 처리 시 빈 객체로 인한 화면 오류 방지.
// 데이터 유효성 검사 시 빈 값/무효 값 걸러내기.