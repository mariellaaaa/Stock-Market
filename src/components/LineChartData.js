import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'


function LineChartData(props) {
  const [open, setOpen] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState([]);

  const stockName = props.companySymbol;
  const API_key = "YGX9BFEHPD7WCLGO";

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&outputsize=compact&apikey=${API_key}`)
    .then(res => res.json())
    .then(
      (result) => {
        const allDates = (Object.keys(Object.entries(result)[1][1]));
        let openPrice = [];
        let highPrice = [];
        let lowPrice = [];

        for (let i = allDates.length - 1; i >= 0; --i) {
          openPrice.push(parseFloat(result['Time Series (Daily)'][allDates[i]]['1. open']));
          highPrice.push(parseFloat(result['Time Series (Daily)'][allDates[i]]['2. high']));
          lowPrice.push(parseFloat(result['Time Series (Daily)'][allDates[i]]['3. low']));
        }
        setOpen(openPrice);
        setHigh(highPrice);
        setLow(lowPrice);
        setDays(allDates);
      },

      (error) => {
        setIsLoading(true);
        setError(error);
      }
    )
  }, [stockName])

  if (error) {
    return <div>
      Error: {error.message}
    </div>;
  } else if (isLoading) {
    return <div>
      Loading...
    </div>;
  } else {
    return (
      <div style={{width: 1000, height: 500}}>
        <Line
          data = {
            {
              labels: days.slice(0, props.time),
              datasets: [
                {
                  label: 'Open Price',
                  data: open,
                  fill: true,
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "#3A7F8A",
                  tension: 0.4  
                },
                {
                  label: 'High Price',
                  data: high,
                  fill: true,
                  backgroundColor: "rgba(75,192,192,0.2)",
                  borderColor: "#FF9F1F",
                  tension: 0.4
                },
                {
                  label: 'Low Price',
                  data: low,
                  fill: false,
                  borderColor: "red",
                  tension: 0.4
                }
              ]
            }
          }
          options= {
            {
              maintainAspectRatio: false,
            }
          }
        />

      </div>
    );
  }
};

export default LineChartData;


