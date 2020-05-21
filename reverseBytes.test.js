const {reverseBytes} = require("./reverseBytes")

describe("reverseBytes", () => {
	describe("With empty input", () => {
		it("should return an empty array with empty input", () => {
			expect(reverseBytes([])).toEqual([])
		})
	})
	describe("with input", () => {
		it("should return [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] for [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]", () => {
			expect(reverseBytes([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1
			])
		})
		it("should return [1,1,1,1,0,0,0,0, 0,0,0,0,1,1,1,1] for [0,0,0,0,1,1,1,1, 1,1,1,1,0,0,0,0]", () => {
			expect(reverseBytes([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0])).toEqual([
				1,
				1,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1
			])
		})
		it("should return [0,0,0,0,0,0,0,0, 1,1,0,0,1.1,0,0, 0,0,0,1,0,1,1,1] for [0,0,0,1,0,1,1,1, 1,1,0,0,1.1,0,0, 0,0,0,0,0,0,0,0]", () => {
			expect(reverseBytes([0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
				.toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1])
		})
	})
})
