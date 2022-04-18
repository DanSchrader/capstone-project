import styled from 'styled-components';
import NewsArticleHeadLine from './NewsArticleHeadline';
import NewsArticle from './NewsArticle';
import news from '../utils/newsData';

export default function NewsSection() {
  return (
    <NewsWrapper>
      <NewsTitle>News</NewsTitle>
      <NewsArticleList>
        {news.map((articles) => {
          return (
            <li key={articles._id}>
              <NewsArticleHeadLine
                headline={articles.headline}
                date={articles.date}
              />
              <NewsArticle text={articles.text} />
            </li>
          );
        })}
      </NewsArticleList>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.section`
  display: grid;
  margin-top: 50px;
`;

const NewsTitle = styled.h2`
  font-size: 100%;
  margin: 0;
  margin: 30px 0 0 30px;
  color: #3ac5e8;
`;

const NewsArticleList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
`;
