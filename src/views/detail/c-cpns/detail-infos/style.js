import styled from "styled-components";

export const InfosWrapper = styled.div`
padding: 24px 80px 0;
white-space: nowrap;

.detailinfos {
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.namesinfo {
  display: flex;
  flex-direction: column;
  gap: 4px;
  

  .detail-title {
    font-size: 22px;
    font-weight: 600;
  }

  .verify-message {
    font-size: 18px;
    color: #717171;
  }
}

.center-part {
  position: relative;
  padding-right: 400px; 
  word-break: break-word;
  white-space: normal;

  .review-section {
    width: 100%;
  }

  .card {
    position: absolute;
    top: 0;
    right: 0;
    width: 375px;
  }
}

.room-pic{
  display: flex;
  flex-direction: column ;
  gap: 24px;
  font-size: 22px;

  img{
    width: 318px;
    border-radius: 10px;
  }
}

.map{
  display: flex;
  flex-direction: column ;
  padding-top: 30px;
  border-top: 1px solid #ddd;

  .site{
    font-size: 22px;
    padding: 0 0 24px;
    font-weight: 500;
  }
  
}  
`;