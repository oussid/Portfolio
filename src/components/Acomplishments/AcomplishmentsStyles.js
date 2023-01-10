import styled from "styled-components"


export const SingleRow = styled.div`
  width: 100%; 
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: start;
  gap: 1rem;
  margin: 1rem 0;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    grid-template-columns: 1fr;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Row = styled.div`
  width: 100%; 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  align-items: flex-start;
  /* justify-content: space-between; */
  gap: 1rem;
  margin: 1rem 0;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Input = styled.input`
  outline: none;
  max-width: 400px;
  background:none;
  color: ${(props) => props.theme.colors.primary1};
  height: 50px;
  border: .5px solid #9cc9e3;
  border-radius: 6px;
  padding:  .5rem 1rem;

  @media ${props => props.theme.breakpoints.md}{
    height: 40px;
  }
`;

export const Textarea = styled.textarea`
  outline: none;
  max-width: 400px;
  background:none;
  color: ${(props) => props.theme.colors.primary1};
  border: .5px solid #9cc9e3;
  border-radius: 6px;
  padding: 1rem;  
`;




export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 20px;
  }

`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`

export const SubmitBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 18px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  /* margin-top: 0px; */
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`
