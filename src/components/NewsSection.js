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

const NewsWrapper = styled.section`
  gap: 10px;
`;

const NewsTitle = styled.h2`
  font-size: 115%;
  margin: 0;
  margin: 20px 0 0 20px;
  color: #3ac5e8;
`;
