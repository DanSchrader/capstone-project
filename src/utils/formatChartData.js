export default function formatChartData(formattedData) {
  const coinPriceList = formattedData.map((coin) => coin.price);
  const coinTimestamps = formattedData.map((coin) => {
    const date = new Date(coin.time);
    return date.toLocaleDateString();
  });
  const finalData = {
    labels: coinTimestamps,
    datasets: [
      {
        label: 'Price',
        data: coinPriceList,
        backgroundColor: 'rgb(58, 197, 232, 0.8)',
        borderColor: 'rgb(58, 197, 232, 0.2)',
        fill: false,
      },
    ],
  };

  return finalData;
}
