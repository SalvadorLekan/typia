import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_validateEncode_TypeTagArray =
    _test_protobuf_validateEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TypeTagArray>(input),
        message: typia.protobuf.message<TypeTagArray>(),
        decode: typia.protobuf.createDecode<TypeTagArray>(),
    });
