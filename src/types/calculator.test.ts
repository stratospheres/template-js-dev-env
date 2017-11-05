import * as mocha from "mocha";
import Calculator from "./calculator";

describe("Calculator", () => {
	let subject: Calculator;

	beforeEach( () => {
			subject = new Calculator();
	});

	describe("#add", () => {
			it("should add two numbers together", () => {
					const result: number = subject.add(2, 3);
					if (result !== 5) {
							throw new Error("Expected 2 + 3 = 5 but was " + result);
					}
			});
	});
});
