import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
    display: flex;

    .item {
        position: relative;
        width: auto;
        height: 20px;
        margin: 10px 16px;
        font-size: 16px;
        color: ${props => props.theme.isAlpha ? "#fff" : "#6A6A6A"};
        cursor: pointer;
        

        &.active {
            color: ${props => props.theme.isAlpha ? "#fff" : "#222"};
            font-weight: 800;
            border-bottom: 1px solid ${props => props.theme.isAlpha ? "#fff" : "#333"};
        }
  }
`;