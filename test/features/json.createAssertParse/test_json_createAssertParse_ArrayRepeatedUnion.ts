import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_assertParse_ArrayRepeatedUnion = _test_json_assertParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.json.createAssertParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
