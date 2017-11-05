import * as mocha from "mocha";

// this tells Mocha to ignore things we can do in Webpack that it doesn't understand

// tslint:disable-next-line:no-string-literal
require.extensions["css"] = () => {
// tslint:disable-next-line:no-empty
};
