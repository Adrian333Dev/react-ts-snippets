import { FC } from 'react';
import { IUser } from '../models/interfaces/user.interface';

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({
	user: { id, name, address: { city, street } = {} } = {},
}) => {
	return (
		<div>
			{id}. {name} lives in {city} at {street} street
		</div>
	);
};

export default UserItem;
