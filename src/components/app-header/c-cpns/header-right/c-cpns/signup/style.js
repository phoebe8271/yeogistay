import styled from "styled-components";

export const SignUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  .modal {
    background: white;
    border-radius: 16px;
    width: 100%;
    max-width: 460px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .signup-title{
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;

    .close-btn {
      position: absolute;
      left: 0;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    h2 {
      margin: 0 auto;
      font-size: 16px;
      font-weight: 500;
      color: #717171;
    }
  }


  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      font-weight: 600;
      margin-top: 12px;
    }

    select,
    input {
      padding: 12px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .notice {
      font-size: 12px;
      color: #717171;
      line-height: 1.4;
    }

    .notice.error {
      color: red;
    }

    .continue {
      margin-top: 12px;
      background:${props => props.theme.color.primaryColor};
      color: white;
      border: none;
      padding: 14px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .divider {
    text-align: center;
    color: #717171;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  .social {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    button {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;

      &:hover{
        background-color: #ddd;
      }
    }
  }

  .resend-btn {
    background: none;
    border: none;
    color: red;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    margin: 0;

    :hover{
      color: darkred;
    }
  }
`;