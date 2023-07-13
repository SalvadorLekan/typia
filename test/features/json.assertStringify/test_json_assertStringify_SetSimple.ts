import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_assertStringify_SetSimple = _test_json_assertStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.json.assertStringify(input),
    SetSimple.SPOILERS,
);
