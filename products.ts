import { Product } from "./types";

/** List of products and their active bundles */
export const products: Product[] = [
	{
		code: "R12",
		bundles: [
			{ amount: 5, rate: 6.99 },
			{ amount: 10, rate: 12.99 },
		],
	},
	{
		code: "L09",
		bundles: [
			{ amount: 3, rate: 9.95 },
			{ amount: 6, rate: 16.95 },
			{ amount: 9, rate: 24.95 },
		],
	},
	{
		code: "T58",
		bundles: [
			{ amount: 3, rate: 5.95 },
			{ amount: 5, rate: 9.95 },
			{ amount: 9, rate: 16.99 },
		],
	},
];

