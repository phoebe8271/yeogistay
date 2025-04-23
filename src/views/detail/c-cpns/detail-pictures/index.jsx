import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser/index'

export default memo(function DetailPictures() {
    // 定義組件內部狀態
    const [showBrowser, setShowBrowser] = useState(false)


    // 從 reduex 中獲取數據
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo

    }), shallowEqual)

    // 統一處理 picture_url 為陣列形式
    const rawPictures = detailInfo?.picture_url
    const pictures = Array.isArray(rawPictures)
        ? rawPictures
        : rawPictures
            ? [rawPictures]
            : []


    return (
        <PicturesWrapper>
            <div className='detailpic'>
                <div className='detailpic-l'>
                    {pictures.length > 0 && (() => {
                        const item = pictures[0]
                        const url = item?.formats?.medium?.url
                        const imageUrl = url ? `http://localhost:1337${url}` : ""
                        return (
                            <div className="item" key={0} onClick={() => setShowBrowser(true)}>
                                {imageUrl && <img src={imageUrl} alt="" />}
                                <div className='pic-cover'></div>
                            </div>
                        )
                    })()}
                </div>
                <div className='detailpic-r'>
                    {pictures.slice(1, 5).map((item, index) => {
                        const url = item?.formats?.medium?.url
                        const imageUrl = url ? `http://localhost:1337${url}` : ""
                        return (
                            <div className="item" key={index + 1} onClick={() => setShowBrowser(true)}>
                                {imageUrl && <img src={imageUrl} alt="" />}
                                <div className='pic-cover'></div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='show-btn' onClick={() => setShowBrowser(true)}>사진 모두 보기</div>
            {showBrowser && (
                <PictureBrowser
                    pictureUrls={pictures}
                    closeClick={() => setShowBrowser(false)}
                />
            )}

        </PicturesWrapper>
    )
})


