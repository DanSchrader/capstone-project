import { useEffect, useState } from 'react';
import Axios from 'axios';
import HistoryChart from './HistoryChart';
import styled from 'styled-components';
import formatChartData from '../utils/formatChartData';
import logo from '../images/raptoreum-logo.svg';

export default function Dashboard() {
  const [currentData, setCurrentData] = useState();
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
      setCurrentData(currentDataArray);
    };

    fetchCurrentData();
  }, []);

  return (
    <SectionDashboard>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardLegend>
        <RaptoreumLogoContainer>
          <LegendLogo src={logo} alt="Raptoreum-Logo" />
        </RaptoreumLogoContainer>
        <LegendHeadline>Raptoreum-Werte</LegendHeadline>
      </DashboardLegend>
      {historyData ? (
        <HistoryChart historyData={historyData} />
      ) : (
        <div>Data is</div>
      )}
      {currentData ? (
        <DashboardTableContainer>
          <TableIndicator>Preis:</TableIndicator>
          <TableValue>
            {currentData.market_data.current_price.eur} EUR
          </TableValue>
          <TableIndicator>Marktkapazität:</TableIndicator>
          <TableValue>{currentData.market_data.market_cap.eur} EUR</TableValue>
          <TableIndicator>Rang (Marktkap.):</TableIndicator>
          <TableValue>{currentData.market_data.market_cap_rank}</TableValue>
          <TableIndicator>Maximalmenge:</TableIndicator>
          <TableValue>{currentData.market_data.max_supply} RTM</TableValue>
        </DashboardTableContainer>
      ) : (
        <div>loading...</div>
      )}
    </SectionDashboard>
  );
}

const SectionDashboard = styled.section`
  display: grid;
`;

const DashboardTitle = styled.h2`
  font-size: 100%;
  margin: 30px 0 0 30px;
  color: #3ac5e8;
`;

const DashboardLegend = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  margin: 15px 0 0 30px;
`;

const RaptoreumLogoContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const LegendLogo = styled.img`
  height: 27px;
  width: 27px;
`;

const LegendHeadline = styled.h3`
  font-size: 100%;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-top: 5px;
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
  padding: 0;
  gap: 5px;
  justify-self: center;
`;

const TableIndicator = styled.span`
  margin: 0;
  padding: 0;
  font-size: 80%;
  font-weight: 300;
`;

const TableValue = styled.span`
  color: #3ac5e8;
  margin: 0;
  padding: 0;
  font-size: 80%;
  font-weight: 200;
`;
