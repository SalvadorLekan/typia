import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_validatePrune_ArrayRecursiveUnionImplicit =
    _test_misc_validatePrune(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        typia.misc.createValidatePrune<ArrayRecursiveUnionImplicit>(),
    );
