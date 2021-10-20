import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import useMovies from '../hooks/useMovies';

const Home = ({ movies, setMovies, liked, setLiked }) => {
	useMovies({ setMovies: setMovies });

	return (
		<>
			<Container>
				<Row>
					{movies?.map((movie, index) => (
						<MovieCard
							key={index}
							movie={movie}
							index={index}
							liked={liked}
							setLiked={setLiked}
						/>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Home;
