import React, { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd';
import { ItemWrapper } from './style'
import RoomItemStar from "@/assets/svg/icon/room-item-star.svg?react";
import IconArrowLeft from '@/assets/svg/icon/arrow-left.svg?react';
import IconArrowRight from '@/assets/svg/icon/arrow-right.svg?react';
import Indicator from '@/base-ui/indicator/index';
import classNames from 'classnames'
import { getDisplayPrice } from '@/utils/getdisplayprice'


const RoomItem = memo((props) => {
  // props 구조 분해: 데이터, 열수, 간격, 클릭 이벤트
  const { itemData, column = 4, gap = 24, itemClick } = props 
  
  const [selectIndex, setSelectIndex] = useState(0) // 현재 선택된 이미지 인덱스
  const sliderRef = useRef() // ref: Carousel 참조 객체

  // 이미지 데이터를 배열로 통일
  const rawPictures = itemData?.picture_url
  const pictures = Array.isArray(rawPictures)
    ? rawPictures
    : rawPictures
      ? [rawPictures]
      : []

  // 좌우 화살표 클릭 처리
  function controlClickHandle(isNext = true, event) {
    if (!sliderRef.current) return
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = pictures.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 이벤트 버블링 막기 (상위 클릭 막음)
    event.stopPropagation();

  }

  // 아이템 클릭 시 → 상세페이지 이동
  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper $column={column} $gap={gap} onClick={itemClickHandle}>
      <div className="inner">
        <div className="slider">
          {/* 좌우 화살표: 이미지 여러장일 때만 표시 */}
          {pictures.length > 1 && (
            <div className="picture-control">
              <div className="btn-left" onClick={(event) => controlClickHandle(false, event)}>
                <IconArrowLeft />
              </div>
              <div className="btn-right" onClick={(event) => controlClickHandle(true, event)}>
                <IconArrowRight />
              </div>
            </div>
          )}

          {/* 아래 인디케이터 */}
          {pictures.length > 0 && (
            <div className='indicator'>
              <Indicator selectIndex={selectIndex}>
                {
                  pictures.map((item, index) => {
                    return (
                      <div className={'dot-item'} key={index}>
                        <span className={classNames('dot', { active: selectIndex === index })}></span>
                      </div>
                    )
                  })
                }
              </Indicator>
            </div>
          )}

          {/* 캐러셀: Antd Carousel */}
          <Carousel dots={false} ref={sliderRef}>
            {pictures.map((item, index) => {
              const url = item?.formats?.medium?.url
              const imageUrl = url ? `http://localhost:1337${url}` : ""
              return (
                <div className="cover" key={index}>
                  {imageUrl && <img src={imageUrl} alt="" />}
                </div>
              )
            })}
          </Carousel>
        </div>

        {/* 이름 + 리뷰 평점 */}
        <div className="namegp">
          <div className="name">{itemData.name || itemData?.city}</div>
          {itemData?.reviews_score && (
            <div className="namegpright">
              <RoomItemStar className="roomitemstar" />
              <div>{itemData.reviews_score}</div>
              {itemData?.reviews_count && <div>({itemData.reviews_count})</div>}
            </div>
          )}
        </div>

        {/* 부제목 */}
        <div className="title">{itemData?.title}</div>

        {/* 설명 텍스트 */}
        <div className="desc">
          {
            (() => {
              const info = Array.isArray(itemData.verify_info)
                ? itemData.verify_info[0]
                : itemData.verify_info
              return info?.message?.length > 0 ? info.message.join("・") : ""
            })()
          }
        </div>

        {/* 가격 */}
        <div className="price">{getDisplayPrice(itemData)}/박</div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem