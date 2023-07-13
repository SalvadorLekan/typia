import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_assertStringify_SetAlias = _test_json_assertStringify(
    "SetAlias",
    SetAlias.generate,
    typia.json.createAssertStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
