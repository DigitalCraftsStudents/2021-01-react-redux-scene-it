import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

export default function Watchlist() {
  // const movies = useSelector((state) => { return state.movies })
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <h2>My Movies</h2>
      <Row>
        {movies.map((movie) => {
          return (
            <Col
              key={movie.imdbID}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
            >
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
