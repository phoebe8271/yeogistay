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
  const { itemData, column = 4, gap = 24, itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  // 統一處理 picture_url 為陣列形式
  const rawPictures = itemData?.picture_url
  const pictures = Array.isArray(rawPictures)
    ? rawPictures
    : rawPictures
      ? [rawPictures]
      : []

  // 控制左右箭頭
  function controlClickHandle(isNext = true, event) {
    if (!sliderRef.current) return
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = pictures.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation();

  }

  // 判斷點擊後是否跳轉詳情頁面
  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper $column={column} $gap={gap} onClick={itemClickHandle}>
      <div className="inner">
        <div className="slider">
          {/* 左右箭頭控制：多張圖才顯示 */}
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

          {/* 輪播圖片 */}
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

        {/* 名稱 + 評價 */}
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

        {/* 설명 */}
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