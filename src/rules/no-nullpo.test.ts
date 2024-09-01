import { RuleTester } from "@typescript-eslint/rule-tester";
import * as vitest from "vitest";

import { rule } from "./no-nullpo";

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester();

ruleTester.run("no-nullpo", rule, {
	valid: [`const hoge = "ガッ";`],
	invalid: [
		{ code: `const nullpo = "ぬるぽ";`, errors: [{ messageId: "ga!" }] },
	],
});
