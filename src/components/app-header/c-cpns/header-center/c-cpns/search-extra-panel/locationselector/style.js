import styled from "styled-components";

export const LocationSelectorWrapper = styled.div`
  position: absolute;
  top: 140px;
  left: -366px;
  width: 428px;
  height: 500px;
  background-color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  z-index: 99;
  padding: 24px 0 0 0; // 不要給內部 padding，給 h4 用 margin
  overflow: hidden;

  h4 {
    font-weight: bold;
    font-size: 16px;
    margin: 10px 16px 12px 16px;
    padding: 6px 12px;
    }

  .scroll-container {
    height: calc(100% - 40px); 
    overflow-y: auto;
    padding: 0 16px 35px 16px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 3px;
    }

    .section {
      margin-bottom: 16px;
    }

    .item {
      margin: 0 8px;
      padding: 12px;
      border-radius: 12px;
      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
      }
    }

    .title {
      font-weight: bold;
      margin-bottom: 4px;
    }

    .desc {
      font-size: 14px;
      color: #666;
    }
  }
`