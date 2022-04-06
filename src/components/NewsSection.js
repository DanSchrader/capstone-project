import styled from 'styled-components';
import NewsArticleHeadLine from './NewsArticleHeadline';
import NewsArticle from './NewsArticle';

export default function NewsSection() {
  return (
    <NewsWrapper>
      <NewsTitle>News</NewsTitle>
      <NewsArticleHeadLine />
      <NewsArticle />
    </NewsWrapper>
  );
}

const NewsWrapper = styled.section``;

const NewsTitle = styled.h2`
  font-size: 100%;
  margin: 0;
  margin: 30px 0 0 30px;
  color: #3ac5e8;
`;
