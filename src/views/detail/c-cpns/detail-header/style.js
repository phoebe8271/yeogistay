import styled from "styled-components";

export const HeaderWrapper = styled.div`

padding: 24px 80px 0;
white-space: nowrap;

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
    gap: 6px;

    span {
      text-decoration: underline;
    }

    .share-icon{
        display: flex;
        align-items: center;
        gap: 6px;
        border: none;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 6px 10px;
        font-size: 14px;
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
        display: flex;
        align-items: center;
        gap: 6px;
        border: none;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 6px 10px;
        cursor: pointer;

        .favorite-icon{
            width: 20px;
            height: 20px;
            color: #ff0000;
            
            &:hover {
             background-color: transparent;
            }  
            
            &.Mui-checked{
                color:${props => props.theme.color.primaryColor};
            }
        }
     
        &:hover {
        background-color: #F2F2F2; 
        }
    }
    
}
`;