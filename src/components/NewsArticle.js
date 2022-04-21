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
  padding: 0 15px;
  margin-top: 10px;
  border-bottom: solid 1px #565656;
`;

const NewsArticleText = styled.p`
  text-align: justify;
  hyphens: auto;
  line-height: 130%;

  @media screen and (max-width: 960px) {
    font-size: 90%;
    font-weight: 300;
    line-height: 120%;
  }
`;
