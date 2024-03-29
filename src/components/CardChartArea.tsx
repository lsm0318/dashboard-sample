import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

const CardChartArea = () => {

  const data = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  return (
    <Card>
      <Card.Header><small>INGESTED ENTITIES</small></Card.Header>
      <Card.Body className="p-1" style={{height: '280px'}}>
        <Chart
          options={data.options}
          series={data.series}
          type="area"
          height={270}
        />
      </Card.Body>
    </Card>
  )
}

export default CardChartArea;