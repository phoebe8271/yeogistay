import styled from "styled-components";

export const HeaderWrapper = styled.div`

padding: 24px 80px 0;

.detailheader-content{
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.detail-name{
    font-size: 26px;
    font-weight: 600;
}

.header-r{
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      text-decoration: underline;
    }

    .share-icon{
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 6px 10px;
        cursor: pointer;
     
        &:hover {
        background-color: #F2F2F2; 
        }
        
        .shareicon{
            width: 20px;
            height: 20px;
        }
    }

    .save-icon{
        border: none;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 6px 10px;
        cursor: pointer;
     
        &:hover {
        background-color: #F2F2F2; 
        }
    }
    
}
`;