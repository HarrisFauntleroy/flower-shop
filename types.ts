export interface Bundle {
	amount: number;
	rate: number;
}

/** Format for specifying product bundles and pricing */
export interface Product {
	code: string;
	bundles: Bundle[];
}

/**
 * The customers order
 * requires a product code
 * and the desired quantity
 * */
export interface Order {
	code: string;
	amount: number;
}

export interface PriceBreakdown {
	amount: number;
	bundleSize: number;
	rate: number;
}

/** Expected output shape after calculation */
export interface Output {
	code: string;
	totalCost: number;
	breakdown: PriceBreakdown[];
}