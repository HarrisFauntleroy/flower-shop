import checkout from "./checkout";
import util from 'util';

export const flowersOrders = [
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

console.log(util.inspect(checkout(flowersOrders), { showHidden: false, depth: null, colors: true }))