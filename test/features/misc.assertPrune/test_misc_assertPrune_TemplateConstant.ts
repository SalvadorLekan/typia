import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_assertPrune_TemplateConstant = _test_misc_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.misc.assertPrune(input),
    TemplateConstant.SPOILERS,
);
