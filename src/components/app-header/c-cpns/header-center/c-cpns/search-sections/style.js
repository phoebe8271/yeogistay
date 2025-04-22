import styled from "styled-components";

export const SearchSectionsWrapper = styled.div`
    display: flex;
    width: 850px;
    height: 66px;
    border-radius: 30px;
    border: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
    overflow: hidden;

    .item {
        flex: 1;
        display: flex;
        align-items: center;
        border-radius: 30px;
        background-color: #fff;

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 30px;
            
          .title {
            font-size: 12px;
            font-weight: 600;
            color: #222;
            line-height: 20px;
          }

          .desc {
            font-size: 14px;
            color: #6A6A6A;
          }
    }
    
    &:hover {
      background-color: #f7f7f7;
    }

    &.active {
      background-color: #ebebeb; // 更明顯的灰底，自己可調整
    }

    .divider {
        height: 32px;
        width: 1px;
        background-color: #f7f7f7;
    }

  }

`