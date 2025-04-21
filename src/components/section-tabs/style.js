import styled from "styled-components";

export const TabsWrapper = styled.div`
margin-bottom: 20px;

.item{
    display: flex;
    align-items: center;
    justify-content: center;
    
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    border: 1.5px solid #ddd;
    border-radius: 30px;
    background-color: transparent;

    padding: 10px 40px;
    white-space: nowrap;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    transition: box-shadow 0.3s ease;
    
    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        border: 1.5px solid ${props => props.theme.color.primaryColor};
    }
    &.active{
        color: #fff;
        background-color: ${props => props.theme.color.primaryColor};
        border: 1.5px solid ${props => props.theme.color.primaryColor};
    }
}
`;