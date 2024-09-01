import { rule as noNullpo } from "./rules/no-nullpo.js";

const plugin = {
	configs: {
		get recommended() {
			return recommended;
		},
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
