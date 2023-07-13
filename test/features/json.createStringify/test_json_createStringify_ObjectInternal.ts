import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_stringify_ObjectInternal = _test_json_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.json.createStringify<ObjectInternal>(),
);
