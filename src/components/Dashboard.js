import { useEffect, useState } from 'react';
import Axios from 'axios';
import HistoryChart from './HistoryChart';
import styled from 'styled-components';
import formatChartData from '../utils/formatChartData';

export default function Dashboard() {
  const [coin, setCoin] = useState();
  const [historyData, setHistoryData] = useState();

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
      let historicalDataArray = [];
      await Axios.get(
        'https://api.coingecko.com/api/v3/coins/raptoreum/market_chart?vs_currency=eur&days=27&interval=daily'
      ).then((response) => {
        historicalDataArray = response.data.prices;
      });
      let formattedData = formatFetchData(historicalDataArray);
      console.log('formattedData', formattedData);
      let formattedHistoryData = formatChartData(formattedData);
      setHistoryData(formattedHistoryData);
    };

    fetchHistoricalData();
  }, []);

  useEffect(() => {
    const fetchCurrentData = async () => {
      let currentDataArray = [];
      await Axios.get(
        'https://api.coingecko.com/api/v3/coins/raptoreum?localization=de&tickers=false&market_data=true&developer_data=false&sparkline=false'
      ).then((response) => {
        currentDataArray = response.data;
      });
      setCoin(currentDataArray);
    };

    fetchCurrentData();
  }, []);
  console.log('coin', coin);
  console.log('historyData', historyData);

  return (
    <MainDashboard>
      <DashboardTitle>Dashboard</DashboardTitle>
      {coin ? <CoinName>{coin.name}</CoinName> : <div>Loading...</div>}
      {historyData ? (
        <HistoryChart historyData={historyData} />
      ) : (
        <div>Loading...</div>
      )}
      {coin ? (
        <DashboardTableContainer>
          <TableIndicator>Preis:</TableIndicator>
          <TableValue>{coin.market_data.current_price.eur} EUR</TableValue>
          <TableIndicator>Marktkapazität:</TableIndicator>
          <TableValue>{coin.market_data.market_cap.eur} EUR</TableValue>
          <TableIndicator>Rang (Marktkapazität):</TableIndicator>
          <TableValue>{coin.market_data.market_cap_rank}</TableValue>
          <TableIndicator>Maximalmenge:</TableIndicator>
          <TableValue>{coin.market_data.max_supply} RTM</TableValue>
        </DashboardTableContainer>
      ) : (
        <div>Loading...</div>
      )}
    </MainDashboard>
  );
}

const MainDashboard = styled.section`
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

const CoinName = styled.h3`
  font-size: 80%;
  margin: 0;
  margin-top: 10px;
  margin-left: 40px;
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
  margin: 0;
  padding: 0 40px;
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
