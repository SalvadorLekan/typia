import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_validateDecode_ObjectJsonTag =
    _test_protobuf_validateDecode("ObjectJsonTag")<ObjectJsonTag>(
        ObjectJsonTag,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectJsonTag>(input),
        encode: typia.protobuf.createEncode<ObjectJsonTag>(),
    });
