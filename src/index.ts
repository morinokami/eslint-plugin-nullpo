import fs from "node:fs";

import { rule as noNullpo } from "./rules/no-nullpo.js";

const pkg = JSON.parse(
	fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);

const plugin = {
	configs: {
		get recommended() {
			return recommended;
		},
	},
	meta: {
		name: pkg.name,
		version: pkg.version,
	},
	rules: {
		"no-nullpo": noNullpo,
	},
};

const recommended = {
	plugins: {
		nullpo: plugin,
	},
	rules: {
		"nullpo/no-nullpo": "error",
	},
};

export default plugin;
