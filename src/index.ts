import { rule as banNullpo } from "./rules/ban-nullpo.js";

const plugin = {
	rules: {
		"ban-nullpo": banNullpo,
	},
};

export default plugin;
