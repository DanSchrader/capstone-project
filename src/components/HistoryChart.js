import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import styled from 'styled-components';

export default function HistoryChart({ historyData }) {
  const options = {
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
    responsive: true,
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
  padding: 0 40px;
`;