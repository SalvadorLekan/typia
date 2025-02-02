import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_assertEncode_ClassNonPublic =
    _test_protobuf_assertEncode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ClassNonPublic>(input),
        message: typia.protobuf.message<ClassNonPublic>(),
        decode: typia.protobuf.createDecode<ClassNonPublic>(),
    });
