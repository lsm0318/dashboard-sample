import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import React from "react";

const CardChartBar = () => {

  const data = {
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Torjan:Win32/Qakbot', 'Ransom:Win32/Egre...', 'Quakbot', 'Android', 'Dark Herring', 'XAgentOSX', 'Emotet',
          'Pteranodon', 'PsExec', 'Mimikatz'
        ],
      },
    },
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
  }

  return (
    <Card>
      <Card.Header><small>TOP 10 ACTIVE ENTITIES (3 LAST MONTHS)</small></Card.Header>
      <Card.Body className="p-1" style={{height: '280px'}}>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={270}
        />
      </Card.Body>
    </Card>
  );
}

export default CardChartBar;