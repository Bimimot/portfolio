export type TTheme = "DARK" | "LIGHT";

export type THeaderPoint = {
    text: string,
    link: string,
    icon?: TIconHeader,
    active: boolean
};

export type TScrollPart = {
    id: string,
    part: number
}

export type TIconHeader = "home" | "letter" | "desktop" | "profile";

export type TIconSvgName = "code" | "gear" | "wrench";

export type TIconSvg = {
    name: TIconSvgName,
    width?: number,
    height?: number,
    color: boolean
};