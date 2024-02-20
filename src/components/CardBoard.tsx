import { Card, Col, Row, Table } from "react-bootstrap";
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
      <Card.Body className="p-0" style={{height: '280px', overflowY: 'auto'}}>

        <Table className="p-0 m-0" responsive>
          <tbody>
          {posts.map((post, i) =>
            <tr key={i}>
              <td className="align-middle text-center text-nowrap">
                {post.type === 'Opinion' ? <i className="fa-solid fa-circle-exclamation fa-fw"></i> : null}
                {post.type === 'Report' ? <i className="fa-solid fa-file fa-fw"></i> : null}
              </td>
              <td className="align-middle text-center text-nowrap">
                <span>{post.type}</span>
              </td>
              <td className="align-middle text-start">
                <Link to="#" className="text-decoration-none text-reset">{post.subject}</Link>
              </td>
              <td className="align-middle text-start text-nowrap">
                {post.author}
              </td>
              <td className="align-middle text-center text-nowrap">
                {post.date.toDateString()}
              </td>
            </tr>
          )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default CardBoard;