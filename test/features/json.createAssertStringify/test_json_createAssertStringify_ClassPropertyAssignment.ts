import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_assertStringify_ClassPropertyAssignment =
    _test_json_assertStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        typia.json.createAssertStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
