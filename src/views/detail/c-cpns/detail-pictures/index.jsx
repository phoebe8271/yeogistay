import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser/index'

export default memo(function DetailPictures() {
    
    // 상태: PictureBrowser 보이기 여부
    const [showBrowser, setShowBrowser] = useState(false)

    // redux state에서 detailInfo 가져오기
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    // picture_url이 배열이 아니어도 배열로 변환
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


