import styled from "styled-components";

export const InfosWrapper = styled.div`
padding: 24px 80px 0;

.detailinfos {
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.namesinfo {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .detail-title {
    font-size: 26px;
    font-weight: 600;
    color: #222;
  }

  .detail-verifyinfo {
    font-size: 16px;
    color: #717171;
  }
}

.rating-box {
  display: flex;
  gap: 24px;
  box-sizing: border-box;
  padding: 22px 26px;
  margin-bottom: 12px;
  align-items: center;
  border-radius: 12px;
  justify-content: space-around;
  border: 1px solid #ddd;

  .rating-content{
    padding: 20px 28px;
    display: flex;



    .badge {
      font-size: 14px;
      color: #000;
    }

    .badge-text {
      font-size: 14px;
      color: #717171;
    }
  
    .reviews-score {
      font-size: 16px;
      font-weight: 600;
    }
  
    .review-count {
      font-size: 14px;
      color: #717171;
    }
  
  }

  
}

`;