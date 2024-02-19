import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="p-4">
      <h3>요청하시는 페이지가 없습니다.</h3>
      <Link to={'/'}>홈으로 이동</Link>
    </Container>
  )
}

export default NotFound;