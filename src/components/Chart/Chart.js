import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = ({
  dataPoints
}) => {
  const total = dataPoints.map(dataPoint => dataPoint.value).reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint, i) =>
        <ChartBar
          key={i}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;