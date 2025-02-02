import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_isEncode_ObjectIntersection =
    _test_protobuf_isEncode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        isEncode: (input) => typia.protobuf.isEncode<ObjectIntersection>(input),
        message: typia.protobuf.message<ObjectIntersection>(),
        decode: typia.protobuf.createDecode<ObjectIntersection>(),
    });
