import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TagStep } from "../../../structures/TagStep";

export const test_protobuf_decode_TagStep = _test_protobuf_decode(
    "TagStep",
)<TagStep>(TagStep)({
    decode: (input: Uint8Array): TagStep => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                value: [] as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // type: Array<TagStep.Type>;
                        output.value.push($pdo1(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo1 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                exclusiveMinimum: undefined as any,
                minimum: undefined as any,
                range: undefined as any,
                multipleOf: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // number;
                        output.exclusiveMinimum = reader.double();
                        break;
                    case 2:
                        // number;
                        output.minimum = reader.double();
                        break;
                    case 3:
                        // number;
                        output.range = reader.double();
                        break;
                    case 4:
                        // number;
                        output.multipleOf = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
    },
    encode: (input: TagStep): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        // 1 -> TagStep.Type;
                        writer.uint32(10);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo1 = (input: any): any => {
                // property "exclusiveMinimum";
                writer.uint32(9);
                writer.double(input.exclusiveMinimum);
                // property "minimum";
                writer.uint32(17);
                writer.double(input.minimum);
                // property "range";
                writer.uint32(25);
                writer.double(input.range);
                // property "multipleOf";
                writer.uint32(33);
                writer.double(input.multipleOf);
            };
            const $io1 = (input: any): boolean =>
                "number" === typeof input.exclusiveMinimum &&
                0 === (input.exclusiveMinimum % 5) - 3 &&
                3 < input.exclusiveMinimum &&
                "number" === typeof input.minimum &&
                0 === (input.minimum % 5) - 3 &&
                3 <= input.minimum &&
                "number" === typeof input.range &&
                0 === (input.range % 5) - 0 &&
                0 < input.range &&
                100 > input.range &&
                "number" === typeof input.multipleOf &&
                0 === input.multipleOf % 5 &&
                3 <= input.multipleOf &&
                99 >= input.multipleOf;
            //TagStep;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
