import styled from "styled-components";

export const FooterWrapper =styled.div`
display: flex;
margin-top: 10px;

.info {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 700; 

  &:hover {
    text-decoration: underline;
  }

  .text {
    display: inline-block;
  }

  .morearrow {
    width: 20px;
    height: 20px;
    display: inline-block;
    transform: translateY(-0.5px);
    margin-left: 4px;
  }
}

`;