import { Button, Card } from 'react-bootstrap';

export default function MovieCard(props) {
  const { Title, Poster, Year, imdbID } = props.movie;

  return (
    <Card>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
}
