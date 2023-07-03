import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { ITodo } from '../models/interfaces/todo.interface';
import { List, TodoItem } from '../components/exports';

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const { data } = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos',
				{ params: { limit: 10 } }
			);
			setTodos(data);
		} catch (err) {
			alert(err);
		}
	};
	return (
		<List
			items={todos}
			render={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
		/>
	);
};

export default TodosPage;
