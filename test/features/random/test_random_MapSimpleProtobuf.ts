import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_random_MapSimpleProtobuf = _test_random(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
    random: () => typia.random<MapSimpleProtobuf>(),
    assert: typia.createAssert<MapSimpleProtobuf>(),
});
