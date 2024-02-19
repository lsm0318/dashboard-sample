import React, { CSSProperties } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { convertToK } from "../lib/utils";

interface CardLabelsProps {
  title: string;
  data: CardLabel[];
}

export interface CardLabel {
  name: string;
  value: number;
  color: CSSProperties;
}

const CardLabels: React.FunctionComponent<CardLabelsProps> = ({
  title, data
}) => {
  return (
    <Card>
      <Card.Header><small>{title}</small></Card.Header>
      <Card.Body className="p-0">
        <Row className="p-0 m-0 row-cols-3">
          {data.map((label, i) =>
            <Col key={i} className="p-3" style={label.color}>
              <span className="fs-5">{convertToK(label.value)}</span>
              <br/>
              <span className="small">{label.name}</span>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardLabels;