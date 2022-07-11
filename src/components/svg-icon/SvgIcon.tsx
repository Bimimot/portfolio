import React, { FC } from "react";

import Code from "./icons/IconCode";
import Gear from "./icons/IconGear";
import Wrench from "./icons/IconWrench";

//-------svgIcon--------
type TIconName = "code" | "gear" | "wrench";

type TSvgIcon = {
    name: TIconName,
    width?: number,
    height?: number,
    color: boolean
};

const componentsLib = {
    code: Code,
    gear: Gear,
    wrench: Wrench
};

const SvgIcon = React.memo(
    (props: TSvgIcon) => {
        let { name, ...iconAttrs } = props;
        const Icon = componentsLib[name];
        return <Icon {...iconAttrs} />
    }
);

export default SvgIcon;
