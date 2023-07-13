import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_isClone_ArrayRepeatedUnionWithTuple = _test_misc_isClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.misc.createIsClone<ArrayRepeatedUnionWithTuple>(),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
