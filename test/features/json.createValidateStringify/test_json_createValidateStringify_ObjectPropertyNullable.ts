import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_validateStringify_ObjectPropertyNullable =
    _test_json_validateStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.json.createValidateStringify<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
