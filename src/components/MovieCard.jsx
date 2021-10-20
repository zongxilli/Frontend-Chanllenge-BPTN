import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const MovieCard = ({ movie, index, liked, setLiked }) => {
	const onClickHandler = () => {
		let copy = [...liked];
		copy[index] = !copy[index];
		setLiked(copy);
	};

	return (
		<Col xs={12} md={4} lg={3}>
			<Card>
				<Card.Title>{movie.title}</Card.Title>
				<Card.Text>Vote average: {movie.vote_average}</Card.Text>
				<Card.Text>Popularity: {movie.popularity}</Card.Text>
				<Card.Text>Released at: {movie.release_date}</Card.Text>
				<Button
					variant={liked[index] === true ? 'danger' : 'info'}
					onClick={onClickHandler}
				>
					{liked[index] === true ? 'Liked' : 'Like'}
				</Button>
			</Card>
		</Col>
	);
};

export default MovieCard;
