import styled from "styled-components";

export const ItemWrapper = styled.div`
box-sizing: border-box;
flex: 0 0 ${props => `calc((100% - ${props.$gap * (props.$column - 1)}px) / ${props.$column})`};
max-width: ${props => `calc((100% - ${props.$gap * (props.$column - 1)}px) / ${props.$column})`};

.inner{
   width:100%
}

.slider{
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;

  &:hover{
    .picture-control{
      display: flex;
    }
  }

  .indicator{
    position: absolute;
    z-index: 9;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;

    .dot-item{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 20%;

      .dot{
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;

        &.active{
          width: 12px;
          height: 12px;
        }
      }
    }
  }

  .picture-control{
      position: absolute;
      inset: 0;
      z-index: 1;
      display: none;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;

      .btn-left, 
      .btn-right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
        color: #fff;
        cursor: pointer;
        pointer-events: auto;
      }

      .btn-left{
        left: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.25), transparent);
      }

      .btn-right{
        right: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.25), transparent);
      }

      svg {
        display: block;
      }
    }
}

.cover{
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
    }
}

.title{
    color:#586b76;
}

.desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 400;
    color:#586b76;
}

.namegp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 6px;
    margin: 10px 0 5px;
    overflow: hidden;

    .name {
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
      flex: 1;
    }

    .namegpright {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      font-size: 14px;
      color: #222;

      .roomitemstar {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
      }
    }
}

.price {
    margin: 8px 0;
    font-weight: 500;
}
`;