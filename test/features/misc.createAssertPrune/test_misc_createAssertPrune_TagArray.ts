import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagArray } from "../../structures/TagArray";

export const test_misc_assertPrune_TagArray = _test_misc_assertPrune(
    "TagArray",
    TagArray.generate,
    typia.misc.createAssertPrune<TagArray>(),
    TagArray.SPOILERS,
);
