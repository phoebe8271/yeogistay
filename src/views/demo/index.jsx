import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator/index'

const Demo = memo(() => {
    const names = ["123", "234", "345", "456", "567", "678", "789", "8910", "91011", "101112", "111213"]
    const [selectIndex, setSelectIndex] = useState(0)

    function toggleClickHandle(isNext = true) {
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
        if (newIndex < 0) newIndex = names.length - 1
        if (newIndex > names.length - 1) newIndex = 0
        setSelectIndex(newIndex)
        console.log(newIndex);
    }

    return (
        <DemoWrapper>
            <div className='indicator-control'>
                <button onClick={() => toggleClickHandle(false)}>prev</button>
                <button onClick={() => toggleClickHandle(true)}>next</button>

            </div>

            <div className='demo-list'>
                <Indicator selectIndex={selectIndex}>
                    {
                        names.map(item => {
                            return <button key={item}>{item}</button>
                        })
                    }
                </Indicator>
            </div>

        </DemoWrapper>
    )
})

Demo.propTypes = {

}

export default Demo
