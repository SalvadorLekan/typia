import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_validateStringify_ArrayRepeatedNullable =
    _test_json_validateStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input) => typia.json.validateStringify(input),
        ArrayRepeatedNullable.SPOILERS,
    );
