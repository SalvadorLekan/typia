import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_isDecode_CommentTagAtomicUnion =
    _test_protobuf_isDecode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )({
        isDecode: (input) =>
            typia.protobuf.isDecode<CommentTagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
    });
