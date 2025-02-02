import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_isStringify_ObjectUnionCompositePointer =
    _test_json_isStringify(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
        typia.json.createIsStringify<ObjectUnionCompositePointer>(),
    );
