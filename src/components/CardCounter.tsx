import React, { ReactElement } from "react";
import { Card } from "react-bootstrap";
import { convertToK } from "../lib/utils";

interface CardCounterProps {
  title: string;
  value: number;
  changed?: number;
  icon?: ReactElement;
}

const CardCounter: React.FunctionComponent<CardCounterProps> = ({
  title, value, changed = 0, icon
}) => {
  return (
    <Card>
      <Card.Header><small>{title}</small></Card.Header>
      <Card.Body className="p-3">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold fs-4">{convertToK(value)}</span>
          {changed > 0 &&
              <span className="px-1 small text-white bg-success bg-opacity-75">
                  + {changed} (24 hours)
                </span>
          }
          <div className="ms-auto">
            {icon}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardCounter;