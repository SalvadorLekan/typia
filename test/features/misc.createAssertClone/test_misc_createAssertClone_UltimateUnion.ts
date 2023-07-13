import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_assertClone_UltimateUnion = _test_misc_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.misc.createAssertClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
