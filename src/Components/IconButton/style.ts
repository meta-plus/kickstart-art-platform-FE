import { style } from "typestyle";

export const buttonDiv = (active:boolean, iconSize:number) => style({
    width: iconSize/16+"rem", 
    height: iconSize/16+"rem",
    alignSelf: "center",
    cursor: active ? "pointer" : "not-allowed"
})