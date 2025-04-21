import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
    position: relative;
    padding: 12px 0 ;
    align-items: center;
    overflow: visible;
    width: 100%;
    
    .scroll{
        overflow: hidden;
        width: 100%;

        .scroll-content{
            display: flex;
            gap: 16px;
            padding-right: 16px;
            transition: transform 0.3s ease;
            transform: translateX(0); // 初始位置
            width: fit-content; 
            box-sizing: content-box;
        }
    }

    .control{
        position: absolute;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        text-align: center;
        border: 1px solid #eee;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 10;

        &.left{
            left: 0;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &.right{
            right: 0;
            top: 50%;
            transform: translate(50%,-50%);
        }

        &:hover{
            box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
        }
    }

`;
