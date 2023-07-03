import { FC } from 'react';
import { IUser } from '../models/interfaces/user.interface';
import UserItem from './UserItem';

type UserListProps = {
	users: IUser[];
};

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<div>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
