import styled from 'styled-components';
import ScrollToTop from '../utils/ScrollToTop';
import NewsSection from '../components/NewsSection';

export default function NewsPage() {
  return (
    <Wrapper>
      <ScrollToTop />
      <NewsSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 50vw;
  justify-self: center;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
