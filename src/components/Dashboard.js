import { useEffect, useState } from 'react';
import Axios from 'axios';
import HistoryChart from './HistoryChart';
import styled from 'styled-components';
import NewsArticle from './NewsArticle';

export default function Dashboard() {
  const [coin, setCoin] = useState({});
  const [historyData, setHistoryData] = useState({});

  const formatFetchData = (data) => {
    return data.map((element) => {
      return {
        time: element[0],
        price: element[1],
      };
    });
  };

  useEffect(() => {
    const fetchHistoricalData = async () => {
      let dataArray = [];
      await Axios.get(
        'https://api.coingecko.com/api/v3/coins/raptoreum/market_chart?vs_currency=eur&days=27&interval=daily'
      ).then((response) => {
        dataArray = response.data.prices;
      });
      const formattedData = formatFetchData(dataArray);
      console.log('formattedData', formattedData);
      setHistoryData({
        labels: formattedData.map((value) => {
          const date = new Date(value.time);
          return date.toLocaleDateString();
        }),
        datasets: [
          {
            label: 'Price',
            data: formattedData.map((value) => value.labels),
            backgroundColor: 'rgb(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
          },
        ],
      });
    };

    fetchHistoricalData();
  }, []);

  useEffect(() => {
    Axios.get(
      'https://api.coinstats.app/public/v1/coins/raptoreum?currency=EUR'
    ).then((response) => {
      setCoin(response.data.coin);
    });
  }, []);

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
        <HistoryChart historyData={historyData} />
      </DashboardGraph>
      <DashboardTableContainer>
        <TableIndicator>Preis:</TableIndicator>
        <TableValue>{coin.price}</TableValue>
        <TableIndicator>Marktkapazität:</TableIndicator>
        <TableValue>{coin.marketCap}</TableValue>
        <TableIndicator>24h-Volumen:</TableIndicator>
        <TableValue>{coin.volume}</TableValue>
        <TableIndicator>Maximalmenge:</TableIndicator>
        <TableValue>{coin.totalSupply} RTM</TableValue>
      </DashboardTableContainer>
      <NewsTitle>News</NewsTitle>
      <NewsArticle />
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
  color: #3ac5e8;
`;

const DashboardGraph = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const CurrencySelector = styled.select`
  width: 100px;
  justify-self: center;
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
  padding: 0 50px;
  font-size: 80%;
  font-weight: 300;
`;

const TableIndicator = styled.span`
  margin: 0;
  padding: 0;
`;

const TableValue = styled.span`
  color: #3ac5e8;
  margin: 0;
  padding: 0;
`;

const NewsTitle = styled.h2`
  font-size: 115%;
  margin: 0;
  margin: 20px 0 0 20px;
  color: #3ac5e8;
`;
