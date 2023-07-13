import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_is_ConstantIntersection = _test_is(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: any): input is ConstantIntersection => {
        return (
            Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
        );
    },
    ConstantIntersection.SPOILERS,
);
