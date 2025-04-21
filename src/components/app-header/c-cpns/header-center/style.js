import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

    .search-bar {
      position: absolute;
      display: flex;
      align-items: center;
      width: 350px;
      height: 48px;
      border: 1px solid #ddd;
      border-radius: 30px;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
      overflow: hidden;
      ${props => props.theme.mixin.boxShadow};

      .left,
      .center{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 16px;
          transition: background-color 0.25s;
          border-radius: 30px; 
          flex: 1;
          position: relative;
          font-weight: 500;
          color: ${props => props.theme.text.primaryColor};
          cursor: pointer;
      }

      .right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 16px;
          font-weight: 500;
          color: ${props => props.theme.text.primaryColor};
          cursor: pointer;
      }

      .divider-left,
      .divider-right {
          width: 1px;
          height: 24px;
          background-color: #ddd;
          align-self: center;
          transition: background-color 0.25s;
      }

      .right-wrap {
          display: flex;
          align-items: center;
          border-radius: 30px;
          overflow: hidden;
          flex-shrink: 0;
          height: 100%;
      }

      .left:hover {
          background-color: #f7f7f7;
      }

      .left:hover + .divider-left {
          background-color: transparent;
      }

      .center:hover {
          background-color: #f7f7f7;
      }

      &:has(.center:hover) .divider-left,
      &:has(.center:hover) .divider-right {
        background-color: transparent;
      }

      .right-wrap:hover {
          background-color: #f7f7f7;
      }

      &:has(.right-wrap:hover) .divider-right {
        background-color: transparent;
      }

      .searchicon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          margin-left: 4px;
          flex-shrink: 0;
          color: ${props => props.theme.color.primaryColor};
      }

      svg {
          fill: currentColor; 
        }
    }


    .search-detail {
      position: relative;
      transform-origin: 50% 0;
      will-change: transform, opacity;
      /* transition: all 250ms linear; */

      .infos {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .detail-exit {
      transform: scale(1.0) translateY(0);
      opacity: 1;
    }

    .detail-exit-active {
      transition: all 250ms ease;
      transform: scale(0.35, 0.727273) translateY(-10px);
      opacity: 0;
    }

    .detail-enter {
      transform: scale(0.35, 0.727273) translateY(-10px);
      opacity: 0;
    }

    .detail-enter-active {
      transform: scale(1.0) translateY(0);
      opacity: 1;
      transition: all 250ms ease;
    }

    .bar-enter {
      transform: scale(2.85714, 1.375) translateY(10px);
      opacity: 0;
    }

    .bar-enter-active {
      transition: all 250ms ease;
      transform: scale(1.0) translateY(0);
      opacity: 1;
    }

    .bar-exit {
      opacity: 0;
    }
  
`;
