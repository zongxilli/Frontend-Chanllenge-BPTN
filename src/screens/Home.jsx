import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [liked, setLiked] = useState(new Array(20).fill(false));

	useMovies({ setMovies: setMovies });

	console.log(movies);

	return (
		<Container>
			<Row>
				{movies.map((movie, index) => (
					<MovieCard
						movie={movie}
                        index={index}
						liked={liked}
						setLiked={setLiked}
					/>
				))}
			</Row>
		</Container>
	);
};

export default Home;
