import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_validateStringify_ArrayRepeatedUnionWithTuple =
    _test_json_validateStringify(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        (input) => typia.json.validateStringify(input),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
