import styled from 'styled-components';
import ScrollToTop from '../utils/ScrollToTop';

export default function BuyingDocPage() {
  return (
    <Wrapper>
      <ScrollToTop />
      <Placeholder>BuyingDocPage</Placeholder>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
`;

const Placeholder = styled.div`
  justify-self: center;
  position: fixed;
  top: 40vh;
`;
