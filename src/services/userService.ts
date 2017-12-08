/// reference path="./node_modules/@types/isomorphic-fetch/index.d.ts"
import axios from "axios";

import * as fetch from "isomorphic-fetch";

export function getUsers(): Promise<any> {
	return new Promise((resolve, reject) => {
		axios.get("/users")
		.then((res) => {
				resolve(res.data);
			}
		)
		.catch((err) => {
				reject(err);
			}
		);
	});

}
