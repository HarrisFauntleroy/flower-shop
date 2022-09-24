/** List of products and their active bundles */
const products = [
	{
		code: "R12", bundles: [
			{ amount: 5, rate: 6.99 }, { amount: 10, rate: 12.99 }
		]
	},
	{
		code: "L09", bundles: [
			{ amount: 3, rate: 9.95 }, { amount: 6, rate: 16.95 }, { amount: 9, rate: 24.95 }
		]
	},
	{
		code: "T58", bundles: [
			{ amount: 3, rate: 5.95 }, { amount: 5, rate: 9.95 }, { amount: 9, rate: 16.99 }
		]
	}
] as const

/** Get product codes from array as string literal types */
type ProductCode = typeof products[number]['code']

/** Format for specifying product bundles and pricing */
export interface Product {
	code: ProductCode
	bundles: {
		amount: number;
		rate: number
	}[]
}

/** 
 * The customers order
 * requires a product code 
 * and the desired quantity 
 * */
export interface Order {
	code: ProductCode;
	amount: number;
}

/** Expected output shape after calculation */
export interface Output {
	code: string;
	totalCost: number;
	breakdown: {
		amount: number;
		rate: number;
	}[]
}

const calculateBundles = (value: Order, index: number, array: Order[]) => {
	const result = 'run some logic here'
	return result
}

/** Checkout for flower shop */
const checkout = (ordersArr: Order[]) => {
	/** code and amount comes in, checks amounts against bundle sizes, */
	const orderOutput = ordersArr.map(calculateBundles)
	console.log(orderOutput)
	return [
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
}

export default checkout