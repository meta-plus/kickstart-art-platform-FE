import { ColorTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { style } from "typestyle"

export const topicRowDiv = () => style({
    boxSizing: "border-box",
    padding:"0.75rem 0.5rem",
    backgroundColor: ColorTypes.PUREWHITE,
    border:"0.1rem solid "+ ColorTypes.SOFTSTROKE,
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "row",
    columnGap: "1rem",
    alignItems: "center",
    $nest:{
        "&:hover":{
            borderColor:  ColorTypes.BRAND
        }
    }
}) 

export const topicRowContentDiv = () => style({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1, 
    cursor: "pointer",
    $nest:{
        "&:hover":{
            $nest:{
                div:{
                    color: ColorTypes.BRAND
                }
            }
        }
    } 
})
