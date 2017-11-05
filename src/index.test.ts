/// reference path="./node_modules/@types/jsdom/index.d.ts"

// uses jsdom - see https://github.com/tmpvar/jsdom
// NOTE: for some reason, can't get intellisense to properly work against the jsdom - however, the compiler works
// and the tests work so, it's better than nothing...

import {expect} from "chai";
import * as fs from "fs";
import * as mocha from "mocha";

// can't import this - have to use the require to pull it in... not sure why, really
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe("index.html", () => {
	it ("should say hello", (done) => {
		const index = fs.readFileSync("./src/index.html", "utf-8");
		const dom = new JSDOM(index);
		expect(dom.window.document.querySelector("h1").textContent).to.equal("Hello, world.");
		done();
		dom.window.close();
	});
});
