import React from "react";
import { THeaderPoint } from "../types";


export const initialHeaderState: THeaderPoint[] = [
    { text: "", link: "#home", icon: "home", active: false },
    { text: "About", link: "#about", icon: "profile", active: false },
    { text: "Projects", link: "#projects", icon: "desktop", active: false },
    { text: "Contacts", link: "#contacts", icon: "letter", active: false }];

export const reducer = (
    state: THeaderPoint[],
    action: { type: string }) => {
    return state.map(point => point.link === action.type
        ? { ...point, active: true } : { ...point, active: false })
};

export const HeaderContext = React.createContext({} as
    {
        state: THeaderPoint[],
        dispatch: ({ type }: { type: string }) => void
    });