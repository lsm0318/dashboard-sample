import { Card } from "react-bootstrap";
import React from "react";
import Chart from "react-apexcharts";

const CardChartRadar = () => {

  const data = {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }, {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    }, {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
    }],
    options: {
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      }
    }
  }

  return (
    <Card>
      <Card.Header><small>OBSERVABLES DISTRIBUTION</small></Card.Header>
      <Card.Body className="p-1" style={{height: '280px'}}>
        <Chart
          options={data.options}
          series={data.series}
          type="radar"
          height={250}
        />
      </Card.Body>
    </Card>
  )
}

export default CardChartRadar
