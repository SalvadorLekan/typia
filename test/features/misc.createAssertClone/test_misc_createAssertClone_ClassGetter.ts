import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_assertClone_ClassGetter = _test_misc_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.misc.createAssertClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
