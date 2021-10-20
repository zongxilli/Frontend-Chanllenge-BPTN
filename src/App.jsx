import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
	return (
		<Router>
			<Route path='/' component={Home} />
		</Router>
	);
}

export default App;
