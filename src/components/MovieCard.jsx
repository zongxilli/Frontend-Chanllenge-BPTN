import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const MovieCard = ({ movie, index, liked, setLiked }) => {
	const onClickHandler = () => {
		let copy = [...liked];
		copy[index] = !copy[index];
		setLiked(copy);
	};

	return (
		<Col xs={12}  md={6} lg={4} xl={3}>
			<Card>
				<Card.Img
					variant='top'
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				/>
				<Card.Title>{movie.title}</Card.Title>
				<Card.Body>
					<Card.Text>Vote average: {movie.vote_average}</Card.Text>
					<Card.Text>Popularity: {movie.popularity}</Card.Text>
					<Card.Text>Released at: {movie.release_date}</Card.Text>
					<Button
						variant={liked[index] === true ? 'danger' : 'info'}
						style={{ width: '100%' }}
						onClick={onClickHandler}
					>
						{liked[index] === true ? 'Liked' : 'Like'}
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default MovieCard;
