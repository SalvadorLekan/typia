import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_is_ArrayAtomicSimple = _test_is(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(typia.createIs<ArrayAtomicSimple>());
