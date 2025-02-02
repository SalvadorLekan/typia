import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_validateParse_CommentTagAtomicUnion =
    _test_json_validateParse("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )(typia.json.createValidateParse<CommentTagAtomicUnion>());
