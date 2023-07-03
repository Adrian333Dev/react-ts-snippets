import { ChangeEvent, useMemo, useState } from 'react';

export interface SelectOption<T extends string> {
	value: T;
	label: string;
}

interface SelectProps<T extends string> {
	options?: SelectOption<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}

export const Select = <T extends string>({
	options = [],
	value,
	onChange,
	readonly = false,
}: SelectProps<T>) => {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
		onChange && onChange(event.target.value as T);

	const optionsList = useMemo(() => {
		return options.map(({ value, label }) => (
			<option key={value} value={value}>
				{label}
			</option>
		));
	}, [options]);

	return (
		<select value={value} onChange={handleChange} disabled={readonly}>
			{optionsList}
		</select>
	);
};

enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

const options: SelectOption<UserRole>[] = [
	{ value: UserRole.ADMIN, label: 'Admin' },
	{ value: UserRole.USER, label: 'User' },
];

const EventHandling = () => {
	const [role, setRole] = useState<UserRole>(UserRole.ADMIN);

	const handleChange = (value: UserRole) => {
		setRole(value);
	};
	return (
		<Select<UserRole> options={options} value={role} onChange={handleChange} />
	);
};

export default EventHandling;
