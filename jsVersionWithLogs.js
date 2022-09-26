/**
 * List of products available and their respective bundle pricing
 */
const products = [
	{
		code: "R12",
		bundles: [
			{ amount: 5, rate: 6.99 },
			{ amount: 10, rate: 12.99 }
		]
	},
	{
		code: "L09",
		bundles: [
			{ amount: 3, rate: 9.95 },
			{ amount: 6, rate: 16.95 },
			{ amount: 9, rate: 24.95 }
		]
	},
	{
		code: "T58",
		bundles: [
			{ amount: 3, rate: 5.95 },
			{ amount: 5, rate: 9.95 },
			{ amount: 9, rate: 16.99 }
		]
	}
];

/** 
 * Example order 
 * 10 Roses, 15 Lilies, 13 Tulips
 */
const exampleInput = [
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

const checkout = (orders) => orders.map((value) => {
	console.debug("----------------", '\n',)
	console.debug(`Starting order for ${value.code}...`, '\n');
	/** Isolate the product for the current order */
	const product = products.find(({ code }) => code === value.code);

	/** Sort array of bundles in descending order */
	const productBundles = product?.bundles.sort((first, second) => second.amount - first.amount);

	/** Required amount of product, will reduce as the function proceeds */
	let requiredAmount = value.amount;

	/** The possible bundle sizes calculated to ensure that the remainder after each calculation will accomodate another bundle */
	const bundleSizes = productBundles?.map(({ amount }) => amount)
	/** Calculate the optimal cost of an order based on bundles purchased */
	const priceBreakdown = productBundles?.map((bundle) => {
		console.debug(`Required flowers: ${requiredAmount}`);

		if (bundleSizes?.includes(requiredAmount % bundle.amount) || requiredAmount % bundle.amount === 0) {		/** 
			 * How many of this bundle is required? 
			 * Rounded down to the nearest full number
			 */
			const bundlesRequired = Math.floor(requiredAmount / bundle.amount);

			console.debug(`Bundles required: ${bundlesRequired} of ${bundle.amount} @ $${bundle.rate}/each`)

			/** How many items are still required after this bundle is accounted for */
			requiredAmount = requiredAmount % bundle.amount;

			console.debug(`Required flowers remaining: ${requiredAmount}`, '\n')


			/** If no more bundles are required return null */
			if (bundlesRequired === 0) return null
			return {
				amount: bundlesRequired,
				rate: bundle.rate,
				bundleSize: bundle.amount
			}
		}
		console.debug(`Skipping bundle size ${bundle.amount} too large for order`, '\n');
		return null
		/** Filter out null values */
	}).filter((arrItem) => arrItem !== null);



	/** Sum the returned array of costs */
	const finalPrice = priceBreakdown?.reduce(function (acc, obj) {
		const bundleCost = obj.amount * obj.rate;
		return acc + bundleCost;
	}, 0);

	const result = Number(finalPrice).toFixed(2);
	console.debug(`Total price for ${product?.code}: $${result}`, '\n');
	return {
		code: product?.code,
		totalCost: result,
		breakdown: priceBreakdown
	};
});

const test = checkout(exampleInput)

console.log(JSON.stringify(test))

// code: "R12",
// totalCost: 12.99,

// code: "L09",
// totalCost: 41.90,

// code: "T58",
// totalCost: 25.85,