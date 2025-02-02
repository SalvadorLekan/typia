import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_decode_CommentTagType = _test_protobuf_decode(
    "CommentTagType",
)<CommentTagType>(CommentTagType)({
    decode: (input) => typia.protobuf.decode<CommentTagType>(input),
    encode: typia.protobuf.createEncode<CommentTagType>(),
});
