import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_validateParse_ObjectUnionImplicit =
    _test_json_validateParse("ObjectUnionImplicit")<ObjectUnionImplicit>(
        ObjectUnionImplicit,
    )(typia.json.createValidateParse<ObjectUnionImplicit>());
