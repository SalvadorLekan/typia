import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_assertDecode_CommentTagNaN =
    _test_protobuf_assertDecode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagNaN>(input),
        encode: typia.protobuf.createEncode<CommentTagNaN>(),
    });
