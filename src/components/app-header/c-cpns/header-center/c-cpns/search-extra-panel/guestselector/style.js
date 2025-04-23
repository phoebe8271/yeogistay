import styled from "styled-components";

export const GuestSelectorWrapper = styled.div`
  position: absolute;
  top: 140px;
  left: 58px;
  width: 417px;
  height: 395px;
  padding: 24px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .guest-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 4px;
    border-bottom: 1px solid #ebebeb;

    &:last-child {
      border-bottom: none;
    }

    .info {
      display: flex;
      flex-direction: column;

      .label {
        font-size: 16px;
        font-weight: 600;
        color: #222;
      }

      .desc {
        font-size: 14px;
        color: #717171;
        margin-top: 4px;
      }
    }

    .control {
      display: flex;
      align-items: center;
      gap: 16px;

      button {
        width: 32px;
        height: 32px;
        border: 1px solid #b0b0b0;
        border-radius: 50%;
        background-color: white;
        font-size: 20px;
        color: #222;
        cursor: pointer;
        transition: all 0.2s;

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        &:hover:not(:disabled) {
          border-color: #000;
        }
      }

      span {
        min-width: 12px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
`;