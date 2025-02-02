import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_isDecode_CommentTagRange = _test_protobuf_isDecode(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    isDecode: (input) => typia.protobuf.isDecode<CommentTagRange>(input),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
});
