import styled from 'styled-components';
import logo from '../images/raptoreum-logo-bw.svg';

export default function NewsArticleHeader() {
  return (
    <HeadlineWrapper>
      <RaptoreumLogoContainer>
        <NewsArticleLogo src={logo} alt="Raptoreum-Logo" />
      </RaptoreumLogoContainer>
      <NewsArticleHeadline>2 Millionen Wallets</NewsArticleHeadline>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  margin: 15px 0 0 30px;
`;

const RaptoreumLogoContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #c53a17;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const NewsArticleLogo = styled.img`
  height: 27px;
  width: 27px;
`;

const NewsArticleHeadline = styled.h3`
  font-size: 100%;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-top: 5px;
`;
