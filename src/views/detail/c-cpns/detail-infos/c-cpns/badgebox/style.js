import styled from "styled-components";

export const BadgeBoxWrapper = styled.div`
    
.rating-box {
  display: flex;
  align-items: center;
  gap: 48px;
  width: 653px;
  height: 89px;
  box-sizing: border-box;
  padding: 22px 26px;
  margin-bottom: 50px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #ddd;
}
  .rating-badge{
      display: flex;
      align-items: center;
      gap: 24px;

    .badgeicon{
      display: flex;
      align-items: center;

      .badge {
      font-size: 18px;
      color: #000;
      }
    }
    .badge-text{
      font-size: 16px;
      color: #717171;
    }
  }
    
  .rating-content{
    display: flex;
    align-items: center;
    gap: 34px;

    .rating-score {
      display: flex;
      flex-direction: column ;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      
      .score{
        font-size: 22px;
      }

      .star-icon{
        display: flex;
        align-items: center;
        svg{
          width: 10px;
          height: 10px;
        }
      }
    }

    .rating-count {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .count{
        font-size: 22px;
        font-weight: 600;
      }
      
      span{
        font-size: 12px;
        color: #717171;
      }
    }
  }
`