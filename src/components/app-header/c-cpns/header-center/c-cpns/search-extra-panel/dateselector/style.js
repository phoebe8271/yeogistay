import styled from "styled-components";

export const DateSelectorWrapper = styled.div`
  position: absolute;
  top: 140px;
  left: -285px;
  width: 680px; /* ⬅️ 調大寬度容納兩個月曆 */
  height: 373px;
  padding: 32px 24px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  z-index: 99;
  overflow: hidden;

  .calendar-container {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  .MuiDateCalendar-root {
    display: flex;
    gap: 24px;
    justify-content: center;
  }

  .MuiPickersCalendarHeader-root {
    margin-bottom: 8px;
  }

  .MuiDayCalendar-weekContainer {
    justify-content: center;
  }

  .MuiPickersDay-root {
    font-weight: 600;
    border-radius: 50%; /* 保持圓形外觀 */
  }

  .Mui-selected {
    background-color: #b71c2b !important;
    color: #fff !important;
  }

  .MuiPickersDay-root:hover {
    background-color: #f5f5f5;
  }

  /* 區間中的顏色 (自訂選中樣式搭配 sx backgroundColor 時) */
  .MuiPickersDay-root[aria-selected="true"] {
    background-color: #b71c2b !important;
    color: #fff !important;
  }
`;