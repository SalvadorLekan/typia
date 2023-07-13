import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertClone_DynamicEnumeration = _test_misc_assertClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.misc.createAssertClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
