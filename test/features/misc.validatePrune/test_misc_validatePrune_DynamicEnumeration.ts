import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_validatePrune_DynamicEnumeration =
    _test_misc_validatePrune(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        (input) => typia.misc.validatePrune(input),
        DynamicEnumeration.SPOILERS,
    );
