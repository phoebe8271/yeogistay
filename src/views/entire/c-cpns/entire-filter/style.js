import styled from "styled-components";

export const FilterWrapper = styled.div`
    position: fixed;
    z-index: 9;
    top: 80px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 24px;
    background-color: #fff;

    .filter{
        display: flex;

    .item{
        margin: 0 4px 0 8px;
        padding: 6px 12px;
        border: 1px solid #dce0e0;
        white-space: nowrap;
        border-radius: 4px;
        color: #484848;
        cursor: pointer;

        &.active{
            background:${props => props.theme.color.primaryColor};
            border: 1px solid ${props => props.theme.color.primaryColor};
            color: #fff;
        }
    }
}
`;