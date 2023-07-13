import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_isStringify_AtomicAlias = _test_json_isStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.json.isStringify(input),
    AtomicAlias.SPOILERS,
);
