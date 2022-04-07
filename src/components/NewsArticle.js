import styled from 'styled-components';

export default function NewsArticle() {
  return (
    <NewsArticleWrapper>
      <NewsArticleText>
        Es existieren mittlerweile zwei Millionen Wallets, die Raptoreum-Coins
        aufbewahren: ein rasanter Anstieg der Nutzer seit Launch des
        RTM-Mainnets am 26. Februar 2021.
      </NewsArticleText>
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
`;
