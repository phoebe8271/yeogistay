// export function hasObjectValue(obj){
//     return obj && Object.keys(obj).length > 0
// }


export function hasObjectValue(obj) {
    // console.log("[hasObjectValue 檢查] 傳入值：", obj)
    const isObject = typeof obj === 'object' && obj !== null && !Array.isArray(obj)
    const hasKeys = isObject && Object.keys(obj).length > 0
  
    return hasKeys
  }