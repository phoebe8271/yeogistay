import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { TabsWrapper } from './style';
import ScrollView from '@/base-ui/scroll-view/index';


const SectionTabs = memo((props) => {
    // props 에서 tabNames, tabClick 가져오기
    const { tabNames = [], tabClick } = props
    const [currentIndex, setCurrentIndex] = useState(0) //현재 클릭된 index 상태값

    function itemClickHandle(index, item) {
        // console.log(index);
        setCurrentIndex(index) // 현재 index 업데이트
        tabClick(item.placename) // 부모 컴포넌트로부터 받은 함수 호출, placename 전달
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={index === currentIndex ? "item active" : "item"}
                                // index === currentIndex 면 → "item active" 클래스 부여
                                // 아니면 → "item" 클래스만 부여
                                // 현재 선택된 탭 강조 스타일을 적용하기 위함
                                
                                onClick={() => itemClickHandle(index, item)}
                            >
                                {item.placename}
                            </div>
                        )
                    })
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs
