import styled from 'styled-components';

export default function DashboardNewsArticle({ mostRecentNews }) {
  return (
    <NewsArticleWrapper>
      <NewsArticleText>{mostRecentNews.text}</NewsArticleText>
    </NewsArticleWrapper>
  );
}

const NewsArticleWrapper = styled.article`
  padding: 0 43px;
  margin-top: 10px;
`;

const NewsArticleText = styled.p`
  font-size: 90%;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;
`;
