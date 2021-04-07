import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createAddMovie } from '../redux/actions';

export default function MovieCard(props) {
  const { Title, Poster, Year } = props.movie;
  const dispatch = useDispatch();

  const addMovie = () => {
    dispatch(createAddMovie(props.movie));
  };

  return (
    <Card>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        <Button variant="primary" onClick={addMovie}>
          Add
        </Button>
      </Card.Body>
    </Card>
  );
}
