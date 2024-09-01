import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => name);

export const rule = createRule({
	create(context) {
		return {
			Literal(node) {
				if (typeof node.value === "string" && node.value.includes("ぬるぽ")) {
					context.report({
						node,
						messageId: "ga!",
					});
				}
			},
		};
	},
	name: "no-nullpo",
	meta: {
		type: "suggestion",
		docs: {
			description: "Smack ぬるぽ (nullpo) with a hammer",
		},
		messages: {
			"ga!": "ガッ 🔨",
		},
		schema: [],
	},
	defaultOptions: [],
});
