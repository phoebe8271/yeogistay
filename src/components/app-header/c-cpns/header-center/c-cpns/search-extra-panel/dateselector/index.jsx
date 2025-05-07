import React, { forwardRef, memo, useState } from 'react'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { DateSelectorWrapper } from './style'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'

// dayjs 확장, 날짜가 범위 내에 있는지 판단 가능하게 함
dayjs.extend(isBetween)

function Dateselector(props, ref) {
    // 선택한 시작일, 종료일 상태 관리
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    // 왼쪽/오른쪽 달력 현재 표시 월
    const [leftRefDate, setLeftRefDate] = useState(dayjs())
    const [rightRefDate, setRightRefDate] = useState(dayjs().add(1, 'month'))

    // 날짜 클릭 처리
    const handleChange = (newDate) => {
        // 이미 시작일이 있고 종료일이 없을 때
        if (startDate && !endDate) {
            if (newDate.isBefore(startDate)) {
                setStartDate(newDate)
                setEndDate(null)
                setLeftRefDate(newDate.startOf('month'))
                setRightRefDate(newDate.add(1, 'month').startOf('month'))
            } else {
                setEndDate(newDate)
            }
            // 시작일이 없거나 한 쌍 선택이 끝난 경우, 클릭한 날짜를 새 시작일로 설정하고 상태 초기화.
        } else {
            setStartDate(newDate)
            setEndDate(null)
            setLeftRefDate(newDate.startOf('month'))
            setRightRefDate(newDate.add(1, 'month').startOf('month'))
        }
    }

    // 특정 날짜가 선택 범위 내에 있는지 판단
    const isInRange = (date) => {
        if (!startDate || !endDate) return false
        return dayjs(date).isBetween(startDate, endDate, null, '[]') ||
            dayjs(date).isBetween(endDate, startDate, null, '[]')
    }

    // 특정 날짜가 선택한 시작/종료일인지 판단
    const isSelected = (date) => {
        return (startDate && date.isSame(startDate, 'day')) ||
            (endDate && date.isSame(endDate, 'day'))
    }

    // 사용자 정의 단일 날짜 셀 렌더링
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
                        key={leftRefDate.format('YYYY-MM')} 
                        value={startDate || undefined}
                        referenceDate={leftRefDate}
                        onChange={handleChange}
                        onMonthChange={(newMonth) => setLeftRefDate(newMonth)}
                        slots={{ day: CustomDay }}
                        shouldDisableDate={(date) => date.isBefore(dayjs(), 'day')}
                    />
                    {/* 두 번째 달력 (다음 월) */}
                    <DateCalendar
                        key={rightRefDate.format('YYYY-MM')} 
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