import styled from 'styled-components';
import logo from '../images/raptoreum-logo.svg';

export default function NewsArticleHeader({ headline, date }) {
  return (
    <HeadlineWrapper>
      <RaptoreumLogoContainer>
        <NewsArticleLogo src={logo} alt="Raptoreum-Logo" />
      </RaptoreumLogoContainer>
      <NewsArticleHeadline>{headline}</NewsArticleHeadline>
      <NewsArticleDate>{date}</NewsArticleDate>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'logo headline'
    'date date';
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 10px;
  margin: 15px 30px 15px 30px;
`;

const RaptoreumLogoContainer = styled.div`
  grid-area: logo;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const NewsArticleLogo = styled.img`
  height: 27px;
  width: 27px;
`;

const NewsArticleHeadline = styled.h3`
  grid-area: headline;
  font-size: 90%;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const NewsArticleDate = styled.span`
  grid-area: date;
  font-size: 80%;
  font-weight: 300;
  padding-left: 13px;
  color: #3ac5e8;
`;
