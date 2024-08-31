import { rule as banNullpo } from "./rules/ban-nullpo.js";

const plugin = {
	configs: {
		get recommended() {
			return recommended;
		},
	},
	rules: {
		"ban-nullpo": banNullpo,
	},
};

const recommended = {
	plugins: {
		nullpo: plugin,
	},
	rules: {
		"nullpo/ban-nullpo": "error",
	},
};

export default plugin;
