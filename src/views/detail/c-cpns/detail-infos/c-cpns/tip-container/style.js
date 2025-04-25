import styled from "styled-components";

export const TipWapper = styled.div`
.tip-container {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 372px;
  background-color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.2),0 1px 2px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
}

.tip-icon {
  flex-shrink: 0;
}

.tip-text {
    display: flex;
    flex-direction: column ;
  font-size: 14px;
  color: #222;
  line-height: 1.4;
}
`;

