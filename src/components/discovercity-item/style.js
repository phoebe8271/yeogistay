import styled from "styled-components";

export const ItemWrapper = styled.div`
flex: 0 0 auto;
width: 240px;

.inner{
    padding: 4px;

    .item-info{
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.8s ease;

        &:hover {
            transform: scale(1.03);
            box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
            cursor: pointer;
        }
    }
}
.cover {
    width: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      display: block;      
    }
}

.bg-cover{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0)3%, rgb(0,0,0) 100%);
}

.info{
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 20px;
    white-space: nowrap;
    color: #fff;

    .city{
        font-size: 18px;
        font-weight: 600;
    }

    .price {
        font-size: 14px;
         margin-top: 5px;
    }
}

`;