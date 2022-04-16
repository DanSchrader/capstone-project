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
`;
