import { exampleInput, expectedOutput } from './exampleValues'
import checkout from './checkout'

test("Flower shop checkout", () => {
	expect(checkout(exampleInput)).toEqual(expectedOutput)
});