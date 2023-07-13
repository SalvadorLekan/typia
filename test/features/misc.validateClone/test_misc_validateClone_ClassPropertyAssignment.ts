import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_validateClone_ClassPropertyAssignment =
    _test_misc_validateClone(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        (input) => typia.misc.validateClone(input),
        ClassPropertyAssignment.SPOILERS,
    );
