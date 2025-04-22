import React, { forwardRef, memo, useState } from 'react'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { DateSelectorWrapper } from './style'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'

dayjs.extend(isBetween)

function Dateselector(props, ref) {
    // 상태 관리
    // 사용자가 선택한 시작 날짜와 종료 날짜 저장
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    // 좌측 달력, 우측 달력의 현재 표시 중인 월을 각각 상태로 관리
    const [leftRefDate, setLeftRefDate] = useState(dayjs())
    const [rightRefDate, setRightRefDate] = useState(dayjs().add(1, 'month'))

    // 날짜 클릭 처리
    const handleChange = (newDate) => {
        if (startDate && !endDate) {
            if (newDate.isBefore(startDate)) {
                setStartDate(newDate)
                setEndDate(null)
                setLeftRefDate(newDate.startOf('month'))
                setRightRefDate(newDate.add(1, 'month').startOf('month'))
            } else {
                setEndDate(newDate)
            }
        } else {
            setStartDate(newDate)
            setEndDate(null)
            setLeftRefDate(newDate.startOf('month'))
            setRightRefDate(newDate.add(1, 'month').startOf('month'))
        }
    }

    // 날짜 강조 조건
    const isInRange = (date) => {
        if (!startDate || !endDate) return false
        return dayjs(date).isBetween(startDate, endDate, null, '[]') ||
            dayjs(date).isBetween(endDate, startDate, null, '[]')
    }

    // 시작일 혹은 종료일인지 확
    const isSelected = (date) => {
        return (startDate && date.isSame(startDate, 'day')) ||
            (endDate && date.isSame(endDate, 'day'))
    }

    // 사용자 정의 날짜 셀
    const CustomDay = (props) => {
        const { day, ...other } = props
        const isBetweenRange = isInRange(day)
        const isSelectedDay = isSelected(day)

        return (
            <PickersDay
                {...other}
                day={day}
                selected={isSelectedDay}
                sx={{
                    backgroundColor: isBetweenRange || isSelectedDay ? '#b71c2b' : undefined,
                    color: isBetweenRange || isSelectedDay ? '#fff' : undefined,
                    borderRadius: isSelectedDay ? '50%' : undefined,
                }}
            />
        )
    }

    return (
        <DateSelectorWrapper ref={ref}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="calendar-container">
                    {/* 첫 번째 달력 (현재 월) */}
                    <DateCalendar
                        key={leftRefDate.format('YYYY-MM')} // key 綁定月份，變了就重建
                        value={startDate || undefined}
                        referenceDate={leftRefDate}
                        onChange={handleChange}
                        onMonthChange={(newMonth) => setLeftRefDate(newMonth)}
                        slots={{ day: CustomDay }}
                        shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
                    />
                    {/* 두 번째 달력 (다음 월) */}
                    <DateCalendar
                        key={rightRefDate.format('YYYY-MM')} // 同上
                        value={endDate || undefined}
                        referenceDate={rightRefDate}
                        onChange={handleChange}
                        onMonthChange={(newMonth) => setRightRefDate(newMonth)}
                        slots={{ day: CustomDay }}
                        shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
                    />
                </div>
            </LocalizationProvider>
        </DateSelectorWrapper>
    )
}

const ForwardedDateSelector = forwardRef(Dateselector)
export default memo(ForwardedDateSelector)