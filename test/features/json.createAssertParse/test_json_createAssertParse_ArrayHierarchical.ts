import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertParse_ArrayHierarchical = _test_json_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.json.createAssertParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
