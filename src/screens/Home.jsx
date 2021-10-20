import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const [movies, setMovies] = useState([]);
	useMovies({ setMovies: setMovies });

	console.log(movies);

	return <div>{movies.page}</div>;
};

export default Home;
