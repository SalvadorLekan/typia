import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_assertEncode_TagCustom = _test_protobuf_assertEncode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    assertEncode: (input) =>
        ((input: any): Uint8Array => {
            const assert = (input: any): TagCustom => {
                const __is = (input: any): input is TagCustom => {
                    const $is_uuid = (typia.protobuf.assertEncode as any)
                        .is_uuid;
                    const $is_custom = (typia.protobuf.assertEncode as any)
                        .is_custom;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        $is_uuid((input as any).id) &&
                        "string" === typeof (input as any).dollar &&
                        $is_custom(
                            "dollar",
                            "string",
                            "",
                            (input as any).dollar,
                        ) &&
                        "string" === typeof (input as any).postfix &&
                        $is_custom(
                            "postfix",
                            "string",
                            "abcd",
                            (input as any).postfix,
                        ) &&
                        "number" === typeof (input as any).log &&
                        Number.isFinite((input as any).log) &&
                        $is_custom(
                            "powerOf",
                            "number",
                            "10",
                            (input as any).log,
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagCustom => {
                        const $guard = (typia.protobuf.assertEncode as any)
                            .guard;
                        const $is_uuid = (typia.protobuf.assertEncode as any)
                            .is_uuid;
                        const $is_custom = (typia.protobuf.assertEncode as any)
                            .is_custom;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.id &&
                                ($is_uuid(input.id) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string (@format uuid)",
                                        value: input.id,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                })) &&
                            (("string" === typeof input.dollar &&
                                ($is_custom(
                                    "dollar",
                                    "string",
                                    "",
                                    input.dollar,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "string (@dollar)",
                                        value: input.dollar,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".dollar",
                                    expected: "string",
                                    value: input.dollar,
                                })) &&
                            (("string" === typeof input.postfix &&
                                ($is_custom(
                                    "postfix",
                                    "string",
                                    "abcd",
                                    input.postfix,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: "string (@postfix abcd)",
                                        value: input.postfix,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".postfix",
                                    expected: "string",
                                    value: input.postfix,
                                })) &&
                            (("number" === typeof input.log &&
                                Number.isFinite(input.log) &&
                                ($is_custom(
                                    "powerOf",
                                    "number",
                                    "10",
                                    input.log,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".log",
                                        expected: "number (@powerOf 10)",
                                        value: input.log,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".log",
                                    expected: "number",
                                    value: input.log,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagCustom",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagCustom",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: TagCustom): Uint8Array => {
                const $is_uuid = (typia.protobuf.assertEncode as any).is_uuid;
                const $is_custom = (typia.protobuf.assertEncode as any)
                    .is_custom;
                const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                const $Writer = (typia.protobuf.assertEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(10);
                        writer.string(input.id);
                        // property "dollar";
                        writer.uint32(18);
                        writer.string(input.dollar);
                        // property "postfix";
                        writer.uint32(26);
                        writer.string(input.postfix);
                        // property "log";
                        writer.uint32(33);
                        writer.double(input.log);
                    };
                    //TagCustom;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return encode(assert(input));
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
    decode: (input: Uint8Array): TagCustom => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                dollar: "" as any,
                postfix: "" as any,
                log: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.id = reader.string();
                        break;
                    case 2:
                        // string;
                        output.dollar = reader.string();
                        break;
                    case 3:
                        // string;
                        output.postfix = reader.string();
                        break;
                    case 4:
                        // number;
                        output.log = reader.double();
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
});
