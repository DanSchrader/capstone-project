import styled from 'styled-components';

export default function DashboardNewsArticle({ mostRecentNews }) {
  return (
    <NewsArticleWrapper>
      <NewsArticleText>{mostRecentNews.text}</NewsArticleText>
    </NewsArticleWrapper>
  );
}

const NewsArticleWrapper = styled.article`
  padding: 0 15px;
  margin: 0 28px;
`;

const NewsArticleText = styled.p`
  font-size: 90%;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;
  margin: 0;
`;
