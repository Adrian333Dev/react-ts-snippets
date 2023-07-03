import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { IUser } from '../models/interfaces/user.interface';
import { List, UserItem } from '../components/exports';

const UsersPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const { data } = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(data);
		} catch (err) {
			alert(err);
		}
	};
	return (
		<List
			items={users}
			render={(user: IUser) => <UserItem user={user} key={user.id} />}
		/>
	);
};

export default UsersPage;
