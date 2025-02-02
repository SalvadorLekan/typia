import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_decode_TypeTagTypeBigInt = _test_protobuf_decode(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
    decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
});
