import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #333;

  .picturebrowser-top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      z-index: 2;
      top: 15px;
      right: 25px;
      width: 40px;
      height: 40px;
      color: #fff;
      cursor: pointer;
    }
  }

  .picturebrowser-slider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;

    .slider-control {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .pictures {
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 105vh;
      overflow: hidden;

      .pic-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      img {
        max-width: 100%;
        max-height: 100%;   
        object-fit: contain;
        user-select: none;
        pointer-events: none;
      }
    }
  }

  .picturebrowser-preview {
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 10px;

  .preview-info {
    position: absolute;
    bottom: 10px;
    max-width: 105vh;
    color: #fff;

    .preview-desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      

      .preview-count{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        gap: 6px;
      }

      .preview-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #fff;
        gap: 6px;

        .icontriangledown,
        .icontriangleup {
          width: 10px;
          height: 10px;
          fill: #fff;
        }
      }
    }

    .preview-indicator {
      margin-top: 5px;
      overflow: hidden;
      transition: height 300ms ease;
      display: flex;
      justify-content: center;
      height: ${props => props.$showPicList ? "67px" : "0"};

      .item {
        margin-right: 15px;
        cursor: pointer;

        img {
          height: 67px;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        &.active {
          img {
            opacity: 1;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

`;