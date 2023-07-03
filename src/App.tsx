import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavLink to='/users'>Users</NavLink>
				<NavLink to='/todos'>Todos</NavLink>
			</div>
			<Route path='/users' element={<UsersPage />} />
			<Route path='/todos' element={<TodosPage />} />
		</BrowserRouter>
	);
};

export default App;
