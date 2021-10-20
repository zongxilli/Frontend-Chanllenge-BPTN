import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home';
import Liked from './screens/Liked';
import Navbar from './components/Navbar';

function App() {
	const [movies, setMovies] = useState([]);
	const [liked, setLiked] = useState(new Array(20).fill(false));

	return (
		<Router>
			<Route path='/' component={Navbar} />
			<Route
				exact
				path='/'
				render={() => (
					<Home
						movies={movies}
						setMovies={setMovies}
						liked={liked}
						setLiked={setLiked}
					/>
				)}
			/>
			<Route
				exact
				path='/liked'
				render={() => (
					<Liked movies={movies} liked={liked} setLiked={setLiked} />
				)}
			/>
		</Router>
	);
}

export default App;
