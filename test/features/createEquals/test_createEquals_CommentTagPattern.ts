import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_equals_CommentTagPattern = _test_equals(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)(
    typia.createEquals<CommentTagPattern>(),
);
