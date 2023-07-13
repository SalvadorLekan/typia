import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_isParse_ArrayRecursive = _test_json_isParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.json.createIsParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
