import { useState } from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { setLoading } from '../redux/actions';

export default function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const fetchMovies = () => {
    dispatch(setLoading(true));
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLoading(false));
        setMovies(data.Search || []);
        if (data.Error) {
          alert(data.Error);
        }
      });
  };

  return (
    <div>
      <h1>Scene-It</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Movies"
            aria-label="Search Movies"
            onChange={handleChange}
            value={search}
            required
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>

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
