import { readFileSync, writeFileSync } from "node:fs";
import * as path from "node:path";

export default {
	hooks: {
		"create-aliases-start"() {
			let redirects = readFileSync("_redirects", "utf8");

			// Resolve alias paths to versioned paths in redirect targets
			// e.g. client_modules/@inspirejs/core → client_modules/@inspirejs/core@3.0.0
			for (let [alias, target] of Object.entries(this.toAlias)) {
				redirects = redirects.replaceAll(
					alias,
					path.join(path.dirname(alias), target),
				);
			}

			writeFileSync("_redirects", redirects);
		},
	},
};
