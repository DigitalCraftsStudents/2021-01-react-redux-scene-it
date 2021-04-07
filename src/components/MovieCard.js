import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAddMovie, createDeleteMovie } from '../redux/actions';

export default function MovieCard(props) {
  const { Title, Poster, Year, imdbID } = props.movie;
  const dispatch = useDispatch();
  const watchlistMovie = useSelector((state) => {
    return state.movies.find((movie) => movie.imdbID === imdbID);
  });

  const addMovie = () => {
    dispatch(createAddMovie(props.movie));
  };

  const deleteMovie = () => {
    dispatch(createDeleteMovie(imdbID));
  };

  return (
    <Card>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        {watchlistMovie ? (
          <Button variant="danger" onClick={deleteMovie}>
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={addMovie}>
            Add
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
