import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import styled from 'styled-components';

export default function HistoryChart({ historyData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    lineHeightAnnotation: {
      alwayse: true,
      hover: false,
      lineWeight: 10.5,
    },
    animation: {
      duration: 2000,
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <ChartWrapper>
      <Line data={historyData} options={options} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 50vw;
  max-width: 1200px;
  position: relative;
  justify-self: center;
  margin: 15px 0;

  @media screen and (max-width: 960px) {
    width: 80vw;
  }
`;
