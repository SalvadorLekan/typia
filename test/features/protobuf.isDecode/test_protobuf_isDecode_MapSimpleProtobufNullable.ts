import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_isDecode_MapSimpleProtobufNullable =
    _test_protobuf_isDecode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        isDecode: (input) =>
            typia.protobuf.isDecode<MapSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
    });
