import styled from "styled-components";

export const ReviewTextWrapper = styled.div`
width: 100%;
padding: 0;
box-sizing: border-box;
border-bottom: 1px solid #ddd;


.review-section{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 26px;
    font-weight: 600;
    white-space: nowrap;
    margin-bottom: 20px;

    .review-score{
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .review-count{
        display: flex;
        align-items: center;
        gap: 6px;

        span{
            font-weight: 400;
        }
    }
}

.review-text{

.userinfo{
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

    .user{
    
    
      .username{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
      }

      .localized-date{
        font-size: 14px;
      }
    }

    .review-message{
        margin-bottom: 50px;
        

        .ratingdate{
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;

            .star-icon{
                display: flex;
                svg{
                    width: 10px;
                    height: 10px;
                }
            }
        }

        .messagecontent{
            white-space: normal;
            word-break: break-word;
            overflow-wrap: break-word;
            font-size: 16px;
            line-height: 1.8;
        }
    }
}

`;