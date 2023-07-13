import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_validateStringify_ArrayMatrix =
    _test_json_validateStringify(
        "ArrayMatrix",
        ArrayMatrix.generate,
        (input) => typia.json.validateStringify(input),
        ArrayMatrix.SPOILERS,
    );
