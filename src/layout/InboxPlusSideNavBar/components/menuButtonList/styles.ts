import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { NONAME } from "dns";
import { style } from "typestyle";     
import { ColorTypes } from "../../../../assets/styles/resource.style";

export const menuListDiv = style({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    rowGap: "8px"
})

export const subMenuListDiv = (isClicked: boolean) => style({
    display: "flex",
    flexDirection: "column",
    rowGap: "0.25rem", 
    height: isClicked ? "fit-content" : 0, 
    paddingLeft: "1.25rem",
    visibility: isClicked ? "visible" : "hidden",
    transition: "all 0.1s ease-in-out"
})

export const leftButton1 = (isSelected: boolean) => 
    style({
        // backgroundColor: props.isClicked || homeLink ? ColorTypes.PUREWHITE : ColorTypes.PURPLE_BG,
        $nest: {
            "&:hover":{
                // backgroundColor: "#8095ff",
                backgroundColor: isSelected ? "white !important" : "#8095ff !important"
            }
        },
        padding: "8px !important"
    })

const isSelected = true
    
export const labelButton = (isSelected: boolean) => style({
    fontSize: "14px !important",
    fontFamily: "Montserrat !important",
    fontWeight: 500,
    color: isSelected ? "#4564FF !important" : "white !important"
})
