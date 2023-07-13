import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_misc_validatePrune_TagInfinite = _test_misc_validatePrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.misc.validatePrune(input),
    TagInfinite.SPOILERS,
);
