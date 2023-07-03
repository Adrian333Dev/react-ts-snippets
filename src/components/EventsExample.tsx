import {
	ChangeEvent,
	DragEvent,
	FC,
	MouseEvent,
	useRef,
	useState,
} from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		console.log('CLICK', e);
		console.log('inputRef', inputRef.current?.value);
	};

	const dragHandler = (e: DragEvent<HTMLDivElement>) => {
		console.log('DRAG', e);
	};

	const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dropHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('DROP', e);
	};

	return (
		<div>
			<input
				type='text'
				value={value}
				onChange={changeHandler}
				placeholder='Controlled'
			/>
			<input type='text' ref={inputRef} placeholder='Uncontrolled' />
			<button onClick={clickHandler}>Click</button>
			{/* Drag and Drop */}
			<div id='box1' draggable onDrag={dragHandler}>
				Box 1
			</div>
			<div
				id='box2'
				onDrop={dropHandler}
				onDragLeave={dragLeaveHandler}
				onDragOver={dragWithPreventHandler}
			>
				Box 2 {isDrag && <div>Drag here</div>}
			</div>
		</div>
	);
};

export default EventsExample;
