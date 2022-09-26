import checkout, { processOrder } from './checkout'
import { Order, Output } from './types';

export const flowersOrders: Order[] = [
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

export const flowersOrdersOut: Output[] = [
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

test("processOrder functions accepts a single order and returns total cost & price breakdown", () => {
	expect(checkout(flowersOrders)).toEqual(flowersOrdersOut)
});

const roseOrderIn: Order = {
	code: "R12",
	amount: 10
};

const roseOrderOut = {
	code: "R12",
	totalCost: 12.99,
	breakdown: [
		{
			amount: 1,
			rate: 12.99,
			bundleSize: 10,
		}
	]
};

const lilyOrderIn: Order = {
	code: "L09",
	amount: 15
};

const lilyOrderOut = {
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
};

const tulipsOrder: Order = {
	code: "T58",
	amount: 13
};

const tulipsOrderOut = {
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
};


test("Checkout function accepts an array of orders and returns an array of order outputs", () => {
	expect(processOrder(roseOrderIn)).toEqual(roseOrderOut);

	expect(processOrder(lilyOrderIn)).toEqual(lilyOrderOut);

	expect(processOrder(tulipsOrder)).toEqual(tulipsOrderOut);
});