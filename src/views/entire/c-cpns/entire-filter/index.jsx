import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter-data.json'
import classNames from 'classnames'


const EntireFilter = memo(() => {

  const [selectItems, setSelectItems] = useState([]) // 현재 선택된 필터 배열 state

  function itemClickHandle(item) { 
    const newItems = [...selectItems] // 배열 복사 (원본 state 직접 수정 방지)
    if (newItems.includes(item)) {   // 이미 선택된 항목 → 제거
      const itemIndex = newItems.findIndex(filterItem => filterItem === item) 
      newItems.splice(itemIndex, 1) // index 찾아서 제거
    } else {   // 선택 안 되어있으면 추가
      newItems.push(item)  
    }
    setSelectItems(newItems) // state 업데이트
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item) => {
            return (
              <div
                className={classNames('item', { active: selectItems.includes(item) })} // 선택된 경우 active 클래스 추가
                key={item}
                onClick={() => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter