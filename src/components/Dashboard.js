import styled from 'styled-components';
import dummy from '../images/capstone-graph-dummy.svg';

export default function Dashboard() {
  return (
    <MainDashboard>
      <DashboardTitle>Dashboard</DashboardTitle>
      <CurrencySelector>
        <option>Raptoreum</option>
        <option>Bitcoin</option>
        <option>Ethereum</option>
        <option>Matic</option>
        <option>Cardano</option>
      </CurrencySelector>
      <DashboardGraph>
        <DashboardGraphDummy src={dummy} alt="Value-Graph" />
      </DashboardGraph>
      <DashboardTableContainer>
        <TableIndicator>Preis:</TableIndicator>
        <TableValue>0,01 USD</TableValue>
        <TableIndicator>Marktkapazität:</TableIndicator>
        <TableValue>13.722.000 USD</TableValue>
        <TableIndicator>24h-Volumen:</TableIndicator>
        <TableValue>68.868 USD</TableValue>
        <TableIndicator>Maximalmenge:</TableIndicator>
        <TableValue>21.000.000.000 RTM</TableValue>
      </DashboardTableContainer>
      <NewsTitle>News</NewsTitle>
      <NewsArticle>
        <NewsArticleHeadline>2 Millionen Wallets</NewsArticleHeadline>
        <NewsArticleText>
          Es existieren mittlerweile zwei Millionen Wallets, die Raptoreum-Coins
          aufbewahren: ein rasanter Anstieg der Nutzer seit Verfügbarkeitsbeginn
          des Coins vor 18 Monaten.
        </NewsArticleText>
      </NewsArticle>
    </MainDashboard>
  );
}

const MainDashboard = styled.main`
  padding: 10px;
  display: grid;
  gap: 10px;
`;

const DashboardTitle = styled.h2`
  font-size: 115%;
  margin: 0;
  margin-left: 20px;
`;

const DashboardGraph = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const CurrencySelector = styled.select`
  width: 25vw;
  justify-self: center;
`;

const DashboardGraphDummy = styled.img`
  width: 300px;
`;

const DashboardTableContainer = styled.section`
  display: grid;
  grid-template-areas:
    'TableIndicator' 'TableValue'
    'TableIndicator' 'TableValue'
    'TableIndicator' 'TableValue'
    'TableIndicator' 'TableValue';
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0 80px;
  font-size: 80%;
  font-weight: 300;
`;

const TableIndicator = styled.span``;

const TableValue = styled.span`
  color: #3ac5e8;
`;

const NewsTitle = styled.h2`
  font-size: 115%;
  margin: 0;
  margin: 20px 0 0 20px;
`;

const NewsArticle = styled.article`
  padding: 0 30px;
`;

const NewsArticleHeadline = styled.h3`
  font-size: 80%;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  color: #3ac5e8;
`;

const NewsArticleText = styled.p`
  font-size: 80%;
`;
