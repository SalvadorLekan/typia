import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_validateClone_TemplateUnion = _test_misc_validateClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.misc.createValidateClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
