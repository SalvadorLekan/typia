import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_assertClone_TemplateAtomic = _test_misc_assertClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.misc.assertClone(input),
    TemplateAtomic.SPOILERS,
);
