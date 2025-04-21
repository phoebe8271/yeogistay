import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { TabsWrapper } from './style';
import ScrollView from '@/base-ui/scroll-view/index';


const SectionTabs = memo((props) => {
    const { tabNames = [] , tabClick} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    
    function itemClickHandle(index, item) {
        // console.log(index);
        setCurrentIndex(index)
        tabClick(item.placename)
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
