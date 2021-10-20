import React, { useEffect } from 'react';
import axios from 'axios';

const useMovies = ({ setMovies }) => {
	useEffect(() => {
		const fetchMovies = async () => {
			const { data } = await axios.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1'
			);

			setMovies(data.results);
		};

		fetchMovies();
	}, []);

	return <div></div>;
};

export default useMovies;
