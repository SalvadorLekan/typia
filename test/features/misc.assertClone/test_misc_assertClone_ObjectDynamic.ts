import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_assertClone_ObjectDynamic = _test_misc_assertClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.misc.assertClone(input),
    ObjectDynamic.SPOILERS,
);
