import React from "react";
import { THeaderPoint } from "../types";
import { headerArr } from "./arrs";

export const initialHeaderState: THeaderPoint[] = headerArr;

export const headerReducer = (
    state: THeaderPoint[],
    newLink: string) => {
    return state.map(point => point.link === newLink
        ? { ...point, active: true } : { ...point, active: false })
};

export const HeaderContext = React.createContext({} as
    {
        state: THeaderPoint[],
        dispatch: (newLink: string) => void
    });