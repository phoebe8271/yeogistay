import styled from "styled-components";

export const IndicatorWrapper = styled.div`
overflow: hidden;


.indicator-content{
    display: flex;    
    position: relative;
    transition: transform 0.3s ease;

    > * { // 只要是子元素
    flex-shrink: 0;
}
}
`;