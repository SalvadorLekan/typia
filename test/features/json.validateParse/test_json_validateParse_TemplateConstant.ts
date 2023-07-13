import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_validateParse_TemplateConstant =
    _test_json_validateParse(
        "TemplateConstant",
        TemplateConstant.generate,
        (input) => typia.json.validateParse<TemplateConstant>(input),
        TemplateConstant.SPOILERS,
    );
