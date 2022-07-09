export type TTheme = "DARK" | "LIGHT";

export type THeaderPoint = {
    text: string,
    link: string,
    icon?: TIcon,
    active: boolean
};

export type TScrollPart = {
    id: string,
    part: number
}

export type TIcon = "home" | "letter" | "desktop" | "profile";