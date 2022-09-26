/**
 * Flower shop coding challenge
 */

import { Order, PriceBreakdown } from "./types";
import { products } from "./products";


type TotalCostInput = (PriceBreakdown | null)[] | undefined;

/** Calculate final cost from the array of PriceBreakdown inputs */
export const calculateTotalCost = (inputArr: TotalCostInput) => inputArr?.reduce((acc, obj) => {
	const bundleCost = obj!.amount * obj!.rate;
	return acc + bundleCost;
}, 0);

/** Calculate a single order */
export const processOrder = (order: Order) => {
	/** Isolate the product for the current order */
	const product = products.find(({ code }) => code === order.code);

	/** Sort array of bundles in descending order */
	const productBundles = product?.bundles.sort(
		(first, second) => second.amount - first.amount
	);

	/** Take a copy of amount required, this will be subtracted from */
	let requiredAmount = order.amount;

	/** The possible bundle sizes calculated to ensure that the remainder after each calculation will accomodate another bundle */
	const bundleSizes = productBundles?.map(({ amount }) => amount);

	/** Calculate the optimal cost of an order based on bundles purchased */
	const priceBreakdown = productBundles
		?.map((bundle) => {
			if (
				bundleSizes?.includes(requiredAmount % bundle.amount) ||
				requiredAmount % bundle.amount === 0
			) {
				/** How many bundles of this size are required */
				const bundlesRequired = Math.floor(requiredAmount / bundle.amount);

				/** How many items are still required after this bundle is accounted for */
				requiredAmount = requiredAmount % bundle.amount;

				/** If no more bundles are required return null */
				if (bundlesRequired === 0) return null;
				return {
					amount: bundlesRequired,
					rate: bundle.rate,
					bundleSize: bundle.amount,
				};
			}
			/** Return null as default */
			return null;
		})
		.filter((arrItem) => arrItem !== null);

	const finalPrice = calculateTotalCost(priceBreakdown);

	const totalCost = Number(finalPrice?.toFixed(2));

	return {
		totalCost,
		code: product?.code,
		breakdown: priceBreakdown,
	};
};

const checkout = (orders: Order[]) =>
	orders.map(processOrder);

export default checkout;
