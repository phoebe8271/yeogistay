import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex:1;
    
    .logo {
    width: 150px;
    height: auto;
    color: ${props => props.theme.color.primaryColor};
    margin-left: 30px;
    cursor: pointer;
  }
`;