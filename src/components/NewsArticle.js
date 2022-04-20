import styled from 'styled-components';

export default function NewsArticle({ text }) {
  return (
    <NewsArticleWrapper>
      <NewsArticleText>{text}</NewsArticleText>
    </NewsArticleWrapper>
  );
}

const NewsArticleWrapper = styled.article`
  margin: 0 28px;
  margin-top: 10px;
  border-bottom: solid 1px #565656;
`;

const NewsArticleText = styled.p`
  font-size: 90%;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;
`;
