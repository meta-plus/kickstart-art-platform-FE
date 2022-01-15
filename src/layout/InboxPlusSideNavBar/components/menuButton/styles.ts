import { ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { style } from "typestyle";    
import { QBMenuButtonProps } from "./types";

export const QBMenuButtonDiv = (props: QBMenuButtonProps, homeLink:boolean) => style({
    alignItems: "center",
    // backgroundColor: props.isClicked || homeLink ? ColorTypes.PUREWHITE : ColorTypes.PURPLE_BG,
    // backgroundColor: props.isClicked || homeLink ? ColorTypes.PUREWHITE : "none",
    backgroundColor: "red",
    border: "none",
    borderRadius: "0.25rem",
    boxSizing: "border-box",
    columnGap: "0.5rem",
    cursor: props.disabled ? "not-allowed" : "pointer",
    display: "flex",
    flexDirection: "row", 
    padding: "0.75rem 0.75rem",
    textDecoration: "none",
    width: "95%",
    $nest: {
        "&:hover":{
            backgroundColor: "#8095ff",
            $nest: {
                div: {
                    // color: ColorTypes.BRAND
                },
                // ' svg path': {
                //     stroke: ColorTypes.BRAND
                // }
            }
        }
    }
})