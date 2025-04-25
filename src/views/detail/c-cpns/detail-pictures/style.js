import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 0 80px;
  
  > .detailpic {
    display: flex;
    height: 600px;
    background-color: #fff;
    gap: 10px; 

    &:hover {
      .pic-cover {
        opacity: 1 !important;
      }

      .item:hover {
        .pic-cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .detailpic-l,
  .detailpic-r {
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .pic-cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
    }
  }

  .detailpic-l {
    flex: 1;
    min-width: 0; 
  }

  .detailpic-r {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px; 

    .item {
      width: calc(50% - 4px); 
      height: calc(50% - 4px);
      box-sizing: border-box;
    }

    .item:nth-child(2n) {
      margin-right: 0; 
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 100px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    white-space: nowrap;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;
