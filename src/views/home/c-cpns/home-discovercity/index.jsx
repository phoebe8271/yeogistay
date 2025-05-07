import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { DiscoverCityWrapper } from './style'
import SectionHeader from '@/components/section-header/index'
import SectionFooter from '@/components/section-footer/index'
import DiscoverCityItem from '@/components/discovercity-item/index'
import ScrollView from '@/base-ui/scroll-view/index'

const HomeDiscoverCity = memo((props) => {
    const { infoData } = props

    return (
        <DiscoverCityWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className='discovercity-list'>
                <ScrollView>
                    {
                        infoData.list_item.map(item => {
                            return <DiscoverCityItem itemData={item} key={item.city} />
                        })
                    }
                </ScrollView>
            </div>
            <SectionFooter />
        </DiscoverCityWrapper>
    )
})

HomeDiscoverCity.propTypes = {
    infoData: PropTypes.object
}

export default HomeDiscoverCity
