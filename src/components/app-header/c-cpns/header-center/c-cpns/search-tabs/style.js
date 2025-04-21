import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
    display: flex;

    .item {
        position: relative;
        width: auto;
        height: 20px;
        margin: 10px 16px;
        font-size: 16px;
        color: #6A6A6A;
        cursor: pointer;
        

        &.active {
            color: #222;
            border-bottom: 1px solid ${props => props.theme.isAlpha ? "#fff" : "#333"};
        }
  }
`;