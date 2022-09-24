import checkout, { Order, Output } from './index'

const exampleInput: Order[] = [
	{
		code: "R12",
		amount: 10
	},
	{
		code: "L09",
		amount: 10
	},
	{
		code: "T58",
		amount: 10
	}
];

const expectedOutput: Output[] = [
	{
		code: "R12",
		totalCost: 12.99,
		breakdown: [
			{
				amount: 10,
				rate: 12.99,
			}
		]
	},
	{
		code: "L09",
		totalCost: 41.90,
		breakdown: [
			{
				amount: 9,
				rate: 24.95,
			},
			{
				amount: 6,
				rate: 16.95,
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
			},
			{
				amount: 1,
				rate: 5.95,
			}
		]
	}
]

test("Flower shop checkout", () => {
	expect(checkout(exampleInput)).toEqual(expectedOutput)
})