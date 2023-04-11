import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale
} from 'chart.js';
import sampledata from './sampledata';

ChartJS.register(CategoryScale);

let labelsampledata = Object.keys(sampledata[0]);
let datasetsamp = sampledata.map((elem, index) => {
  return {
    label: `${labelsampledata[Number(String(index)[0])]}-${index}`,
    backgroundColor: `rgb(2${index}5, 99, ${index}, 0.7)`,
    borderColor: `rgb(2${index}5, 9${index}, 1${index}2)`,
    data: Object.values(elem)
  }
})


function App() {

  const data = {
    labels: labelsampledata,
    datasets: datasetsamp
  }

  const options = {
    datasets: {
      // bar: {
      //   barPercentage: 1,
      //   // categoryPercentage: 2,
      // }
    },
    barThickness: 200,
    scales: {
      // xAxes: [{ stacked: true }],
      yAxes: [
        {
          id: "y",
          // categoryPercentage: 0,
          barPercentage: 0,
          display: 'auto',
          // ticks: {
          //   min: 0,
          //   stepSize: 1
          // },
        },
      ]
    },
  }

  return (
    <div className="App">
      <Chart type='bar' data={data} />
      {/* <Bar
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
      /> */}
    </div>
  );
}

export default App;
