import { FC, PropsWithChildren, HTMLAttributes } from 'react';

export enum CardVariant {
	'outlined',
	'primary',
}

// export type CardProps = PropsWithChildren<{
// 	width?: string;
// 	height?: string;
// 	variant?: CardVariant;
// 	onClick?: () => void;
// 	onMouseEnter?: () => void;
// 	onMouseLeave?: () => void;
// }>;

export type CardProps = PropsWithChildren<
	HTMLAttributes<HTMLDivElement> & {
		width?: string;
		height?: string;
		variant?: CardVariant;
	}
>;

const getVariantStyles = (variant: CardVariant) => {
	switch (variant) {
		case CardVariant.outlined:
			return {
				background: 'gray',
				border: '1px solid black',
			};
		case CardVariant.primary:
			return {
				background: 'lightgray',
				border: '1px solid black',
			};
		default:
			return {};
	}
};

const Card: FC<CardProps> = ({ width = '100%', height = '100%', children }) => {
	return (
		<div style={{ width, height, ...getVariantStyles(CardVariant.outlined) }}>
			{children}
		</div>
	);
};

export default Card;
