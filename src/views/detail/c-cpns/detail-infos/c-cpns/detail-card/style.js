import styled from "styled-components";

export const DetailCardWrapper = styled.div`
  top: 120px;
  width: 372px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),0 1px 2px 0 rgba(0, 0, 0, 0.08);
  .price-row {
    display: flex;
    align-items: baseline;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;

    .per-night {
      font-size: 16px;
      font-weight: normal;
      margin-left: 4px;
      color: #717171;
    }
  }

  .selector-grid {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;

    .selector {
      flex: 1 1 50%;
      border-bottom: 1px solid #ccc;
      padding: 12px;

      &.full-width {
        flex: 1 1 100%;
        border-top: 1px solid #ccc;
      }

      .label {
        font-size: 10px;
        color: #717171;
        margin-bottom: 4px;
      }

      .value {
        font-size: 14px;
      }
    }
  }

  .reserve-button {
    width: 100%;
    background-color:${props => props.theme.color.primaryColor};
    color: white;
    border: none;
    padding: 14px 0;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .note {
    font-size: 12px;
    text-align: center;
    color: #717171;
    margin-bottom: 16px;
  }

  .breakdown {
    font-size: 14px;
    color: #222;

    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    margin-top: 16px;
    border-top: 1px solid #ccc;
    padding-top: 16px;
  }

`;