// 숙소 가격 표시를 통일하기

export function getDisplayPrice(item) {
    if (typeof item?.price_format === 'string' && item.price_format.includes("₩")) {
      return item.price_format
    }
  
    if (typeof item?.price === 'string' && item.price.includes("₩")) {
      return item.price
    }
  
    if (typeof item?.price === 'string' && !isNaN(Number(item.price))) {
      return `₩${Number(item.price).toLocaleString()}`
    }
  
    if (typeof item?.price === 'number') {
      return `₩${item.price.toLocaleString()}`
    }
  
    return ''
  }