import React from 'react';
import { Bar } from 'react-chartjs-2';




export const Tchart = () => {
  const data = {
    labels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    datasets: [
      {
        label: "Bar",
        stack: '1',
        order: 1,
        backgroundColor: "rgb(255, 99, 132, 0.7)",
        borderColor: "rgb(255, 99, 132)",
        data: [0.193, 0.254, 0.292, 0.355, 0.393, 0.444, 0.469, 0.524, 0.589, 0.633, 0.722, 1.0],
      },
      {
        label: "Other bar",
        stack: '2',
        order: 2,
        backgroundColor: "rgb(75, 192, 192, 0.7)",
        borderColor: "rgb(75, 192, 192)",
        data: [0.0252, 0.0513, 0.058, 0.0693, 0.101, 0.111, 0.149, 0.155, 0.176, 0.234, 0.397, 1.0],
      }
    ]
  }

  const options = {
    datasets: {
      bar: {
        barPercentage: 1,
        categoryPercentage: 2,
      }
    },
    barThickness: 500,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [
        {
          id: "y",
          categoryPercentage: 0,
          barPercentage: 0,
          display: 'auto',
          ticks: {
            min: 0,
            stepSize: 1
          },
        },
      ]
    },
  }

  return (
    <div className='linechart'>
      <Bar
        data={data}
        height={200}
        width={500}
        onElementsClick={(e) => console.log('e1 -', e)}
        options={options}
        plugins={[
          {
            id: 'custom_canvas_background_color',
            beforeDraw: (chart) => {
              const ctx = chart.canvas.getContext('2d');
              ctx.save();
              ctx.globalCompositeOperation = 'destination-over';

              // ctx.fillStyle = '#101010'; // chart background color
              // ctx.fillRect(0, 0, 100, 100);
              ctx.restore();
            },
          },
        ]}
      />
    </div>
  );
}

