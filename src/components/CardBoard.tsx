import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

interface CardBoardProps {
  title: string;
  posts: BoardData[];
}

export interface BoardData {
  type: 'Opinion' | 'Report';
  subject: string;
  author: string;
  date: Date;
}

const CardBoard: React.FunctionComponent<CardBoardProps> = ({
  title, posts
}) => {
  return (
    <Card>
      <Card.Header><small>{title}</small></Card.Header>
      <Card.Body style={{height: '280px'}}>
        <div className="d-flex flex-column gap-3">
          {posts.map((post, i) =>
            <Row key={i}>
              <Col sm="auto">
                {post.type === 'Opinion' ? <i className="fa-solid fa-circle-exclamation fa-fw"></i> : null}
                {post.type === 'Report' ? <i className="fa-solid fa-file fa-fw"></i> : null}
              </Col>
              <Col sm={2}>
                <span>{post.type}</span>
              </Col>
              <Col sm className="text-truncate">
                <Link to="#" className="text-decoration-none text-reset">{post.subject}</Link>
              </Col>
              <Col sm={2} className="text-truncate">
                {post.author}
              </Col>
              <Col sm="auto">
                {post.date.toDateString()}
              </Col>
            </Row>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBoard;