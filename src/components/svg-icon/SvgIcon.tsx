import React from "react";
import { TIconSvg } from "../../types";

import Code from "./icons/IconCode";
import Gear from "./icons/IconGear";
import Wrench from "./icons/IconWrench";

const componentsLib = {
    code: Code,
    gear: Gear,
    wrench: Wrench
};

const SvgIcon = React.memo(
    (props: TIconSvg) => {
        let { name, ...iconAttrs } = props;
        const Icon = componentsLib[name];
        return <Icon {...iconAttrs} />
    }
);

export default SvgIcon;
