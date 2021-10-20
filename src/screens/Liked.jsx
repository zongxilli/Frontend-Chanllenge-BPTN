import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const Liked = ({ movies, liked, setLiked }) => {
	return (
		<Container>
			<Row>
				{movies.map((movie, index) => (
					<>
						{liked[index] && (
							<MovieCard
								key={index}
								movie={movie}
								index={index}
								liked={liked}
								setLiked={setLiked}
							/>
						)}
					</>
				))}
			</Row>
		</Container>
	);
};

export default Liked;
