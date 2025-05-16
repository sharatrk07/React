import Button from 'react-bootstrap/Button';
import CardBootstrap from 'react-bootstrap/Card';

interface CardProps {
  title: string;
  description?: string;
  cardStyle?: React.CSSProperties;
  src?: string
}

function Card({
  title,
  description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
  cardStyle,
  src = "https://via.placeholder.com/286x180"
}: CardProps) {
  return (
    <CardBootstrap style={{ width: '20rem', ...cardStyle, display: "flex", margin:"40px"}}>
      <CardBootstrap.Img variant="top" src={src}  style={{border: "10px solid white", borderRadius:"15px"}}/>
      <CardBootstrap.Body>
        <CardBootstrap.Title>{title}</CardBootstrap.Title>
        <CardBootstrap.Text>{description}</CardBootstrap.Text>
        <Button variant="primary">Read More</Button>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}

export default Card;