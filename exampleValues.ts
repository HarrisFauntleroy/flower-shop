import { Order, Output } from "./types";

/** List of products and their active bundles */
export const products = [
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

export const exampleInput: Order[] = [
	{
		code: "R12",
		amount: 10
	},
	{
		code: "L09",
		amount: 15
	},
	{
		code: "T58",
		amount: 13
	}
];

export const expectedOutput: Output[] = [
	{
		code: "R12",
		totalCost: 12.99,
		breakdown: [
			{
				amount: 1,
				rate: 12.99,
				bundleSize: 10,
			}
		]
	},
	{
		code: "L09",
		totalCost: 41.90,
		breakdown: [
			{
				amount: 1,
				rate: 24.95,
				bundleSize: 9,
			},
			{
				amount: 1,
				rate: 16.95,
				bundleSize: 6,
			}
		]
	},
	{
		code: "T58",
		totalCost: 25.85,
		breakdown: [
			{
				amount: 2,
				rate: 9.95,
				bundleSize: 5,
			},
			{
				amount: 1,
				rate: 5.95,
				bundleSize: 3,
			}
		]
	}
];