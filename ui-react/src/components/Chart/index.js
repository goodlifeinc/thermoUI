import React from 'react';
import Plot from 'react-plotly.js';
import { withSize } from 'react-sizeme';

const Chart = ({report, name, size}) => {
    const layout = {
        xaxis: {
            tickformat: '%X - %x',
            autorange: true,
            range: [report.data.x[0], report.data.x[report.data.x.length - 1]],
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1d',
                step: 'day',
                stepmode: 'backward'
                },
                {
                count: 7,
                label: '7d',
                step: 'day',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            rangeslider: {range: [report.data.x[0], report.data.x[report.data.x.length - 1]]},
            type: 'date'
        },
        title: `${name} - ${report.temp}`,
        responsive: false,
        width: size.width
      };
      return (
        <div>
          <Plot
            data={[report.data]}
            layout={ layout }
          />
        </div>
      );
}

export default withSize()(Chart);