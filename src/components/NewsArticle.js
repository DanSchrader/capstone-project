import styled from 'styled-components';

export default function NewsArticle() {
  return (
    <NewsArticleWrapper>
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
  margin-top: 10px;
`;

const NewsArticleText = styled.p`
  font-size: 80%;
`;
