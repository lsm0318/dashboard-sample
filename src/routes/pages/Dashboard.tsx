import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CardCounter from "../../components/CardCounter";
import CardLabels from "../../components/CardLabels";
import CardBoard from "../../components/CardBoard";
import CardChartArea from "../../components/CardChartArea";
import CardChartBar from "../../components/CardChartBar";
import CardChartRadar from "../../components/CardChartRadar";

const Dashboard = () => {

  return (
    <>
      <Row className="mb-4 g-3">
        <Col lg={6} xxl={3}>
          <CardCounter title={'TOTAL ENTITIES'} value={115600} changed={131}
                       icon={<i className="fa-solid fa-database fa-fw"></i>}/>
        </Col>
        <Col lg={6} xxl={3}>
          <CardCounter title={'TOTAL RELATIONSHIPS'} value={796300} changed={417}
                       icon={<i className="fa-solid fa-code-fork fa-fw"></i>}/>
        </Col>
        <Col lg={6} xxl={3}>
          <CardCounter title={'TOTAL REPORTS'} value={9200} changed={3}
                       icon={<i className="fa-regular fa-file-lines fa-fw"></i>}/>
        </Col>
        <Col lg={6} xxl={3}>
          <CardCounter title={'TOTAL OBSERVABLES'} value={470750} changed={43}
                       icon={<i className="fa-solid fa-layer-group fa-fw"></i>}/>
        </Col>
      </Row>
      <Row className="mb-4 g-3">
        <Col md={12} lg={5} xxl={4}>
          <CardLabels title={'TOP LABELS (3 LAST MONTHS)'} data={[
            {name: 'Malware', value: 10880},
            {name: 'geopolitical...', value: 5200},
            {name: 'apt', value: 4880},
            {name: 'android', value: 3910},
            {name: 'Vulnerability', value: 3610},
            {name: 'mobile security', value: 3610},
            {name: 'scamware', value: 3610},
            {name: 'dark herring', value: 3020},
            {name: 'botnet', value: 3000},
          ]}/>
        </Col>
        <Col md={12} lg={7} xxl={8}>
          <CardChartArea/>
        </Col>
      </Row>
      <Row className="mb-4 g-3">
        <Col md={12} lg>
          <CardChartBar/>
        </Col>
        <Col md={12} lg>
          <Card>
            <Card.Header><small>TARGETED COUNTRIES (3 LAST MONTHS)</small></Card.Header>
            <Card.Body style={{height: '280px'}}>
              <h5>W.I.P</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4 g-3">
        <Col md={12} lg={8}>
          <CardBoard title={'LAST INGESTED ANALYSIS (CREATION DATE IN THE PLATFORM)'} posts={[
            {type: 'Opinion', subject: 'strongly-agree', author: 'admin', date: new Date('2022-03-02')},
            {type: 'Opinion', subject: 'agree', author: 'a a', date: new Date('2022-03-02')},
            {type: 'Opinion', subject: 'neutral', author: 'Shehroz Rashid', date: new Date('2022-03-02')},
            {
              type: 'Report',
              subject: 'Asylum Ambuscade: State Actor Uses Compromised Private Ukrainian Military Emails to Target European Governments and Refugee Movement',
              author: 'AlienVault',
              date: new Date('2022-03-02')
            },
            {type: 'Opinion', subject: 'agree', author: 'Perimeter Watch', date: new Date('2022-03-02')},
          ]}/>
        </Col>
        <Col md={12} lg={4}>
          <CardChartRadar/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard;