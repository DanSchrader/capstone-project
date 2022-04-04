import styled from 'styled-components';
import NewsArticleHeadline from './NewsArticleHeadline';

export default function NewsArticle() {
  return (
    <NewsArticleWrapper>
      <NewsArticleHeadline />
      <NewsArticleText>
        Es existieren mittlerweile zwei Millionen Wallets, die Raptoreum-Coins
        aufbewahren: ein rasanter Anstieg der Nutzer seit Verfügbarkeitsbeginn
        des Coins vor 18 Monaten.
      </NewsArticleText>
    </NewsArticleWrapper>
  );
}

const NewsArticleWrapper = styled.article`
  padding: 0 30px;
`;

const NewsArticleText = styled.p`
  font-size: 80%;
`;
