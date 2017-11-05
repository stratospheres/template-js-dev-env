import {expect} from "chai";
import * as mocha from "mocha";
import Calculator from "./calculator";

describe("Calculator", () => {
	let subject: Calculator;

	beforeEach( () => {
			subject = new Calculator();
	});

	describe("#add", () => {
			it("should add two numbers together", () => {
				// this is the default Mocha testing syntax (essentially, throw an error if it's wrong)
				const result: number = subject.add(2, 3);
				if (result !== 5) {
						throw new Error("Expected 2 + 3 = 5 but was " + result);
				}
			});
	});

	describe("#add-chai", () => {
		it("should add two numbers together", () => {
			// this is the Chai testing syntax which uses "expect" to be much more readable
			expect(subject.add(2, 3)).to.equal(5);
		});
	});

});
