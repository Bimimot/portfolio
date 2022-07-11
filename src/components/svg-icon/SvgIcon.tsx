import React from "react";
import { TIconSvg } from "../../types";

import Code from "./icons/IconCode";
import Gear from "./icons/IconGear";
import Wrench from "./icons/IconWrench";

import Github from "./icons/IconGithub";

const componentsLib = {
    code: Code,
    gear: Gear,
    wrench: Wrench,
    github: Github,
    gmail: Github,
    linkedin: Github,
    telegram: Github
};

const SvgIcon = React.memo(
    (props: TIconSvg) => {
        let { name, ...iconAttrs } = props;
        const Icon = componentsLib[name];
        return <Icon {...iconAttrs} />
    }
);

export default SvgIcon;
