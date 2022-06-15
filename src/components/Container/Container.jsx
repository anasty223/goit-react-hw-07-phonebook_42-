import styled from 'styled-components'

const Div = styled.div`
  overflow: hidden;
  padding:  32px;
  margin: 60px auto 0;
  width: 900px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

`;

 function Container({ children }) {
  return <Div >
   
{children}</Div>;
}

export default Container;