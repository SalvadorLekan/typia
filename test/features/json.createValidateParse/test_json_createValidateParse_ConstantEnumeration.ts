import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_validateParse_ConstantEnumeration =
    _test_json_validateParse(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.json.createValidateParse<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
