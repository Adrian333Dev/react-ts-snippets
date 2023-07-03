import { ReactNode } from 'react';

type ListProps<T> = {
	items: T[];
	render: (item: T) => ReactNode;
};

export default function List<T>({ items, render }: ListProps<T>) {
	return <div>{items.map(render)}</div>;
}
