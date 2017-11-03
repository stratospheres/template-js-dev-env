/// <reference path="../node_modules/@types/numeral/index.d.ts" />

import * as numeral from "numeral";
import "./index.css";

const testValue = numeral(1000).format("0,0.00");
console.log(`I feel like ${testValue}.`);
