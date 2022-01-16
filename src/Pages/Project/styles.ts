import { ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { style } from "typestyle"

export const topicListDiv = style({
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem"
})

export const toolbarContainer = style({ 
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-end",
    alignItems:"center",
    columnGap:"0.75rem",
    minHeight:"3rem"
})

export const ContentContainer =  style({
    backgroundColor: ColorTypes.LIGHT_GREYISHWHITE,
    border: "0.075rem solid " + ColorTypes.HARDSTROKE,
    borderRadius: "0.75rem",
    boxSizing: "border-box",
    padding:"1.5rem 1.5rem 6.5rem",
    height: "inherit",
    display:"inline",
    justifyContent:"normal",
    alignItems:"normal",
    overflowX: "auto",
    overflowY:"auto",
})
