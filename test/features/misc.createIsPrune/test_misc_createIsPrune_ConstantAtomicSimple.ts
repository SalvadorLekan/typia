import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_isPrune_ConstantAtomicSimple = _test_misc_isPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.misc.createIsPrune<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
