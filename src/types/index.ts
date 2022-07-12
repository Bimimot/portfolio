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

export type TIconSvgName =
    "code" | "gear" | "wrench" |
    "github" | "gmail" | "linkedin" | "telegram";

export type TIconSvg = {
    name: TIconSvgName,
    size?: string,
    color?: boolean
};

export type TProject = {
    title: string,
    url: string,
    description: string,
    stack: TProjectStacks,
    imageUrl: string
};

export type TProjectStacks = { [key in "langs" | "libs" | "tools"]: string[] };