import styled from "styled-components"


export const DisabledContainer = styled.div`
  width: 100%; 
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 26, 87,0.1);
backdrop-filter: blur(5px);
`;
export const MessageBox = styled.div`
  padding: 2rem 3rem;
  min-height: 180px;
  min-width: 370px;
  left: 0;
  top: 0;
  background: #0f1733;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  @media ${props => props.theme.breakpoints.md}{
    min-width:300;
  }
  @media ${props => props.theme.breakpoints.sm}{
    min-width:auto;
  }
`;

export const Header = styled.h1`
  font-size: 24px;
  text-align: center;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 18px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
  }
`;