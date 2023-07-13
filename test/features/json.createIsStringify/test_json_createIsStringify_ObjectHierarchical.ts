import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_isStringify_ObjectHierarchical = _test_json_isStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.json.createIsStringify<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
