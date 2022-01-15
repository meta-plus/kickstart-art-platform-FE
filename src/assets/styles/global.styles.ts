import { style } from "typestyle"
import { ColorTypes } from "./resource.style"

export const pageLoadingContainer = style({
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    marginTop: "20%"
}) 

export const pageContainer = style({ 
    width: "100%",
    height: "100%", 
    display: "flex", 
    flexDirection: "column",
}) 

export const pageContentContainer = (width:number) => style({
    boxSizing: "border-box",
    height: "100%",
    width: "auto",
    marginLeft: width < 1280 ? 0 : "15rem",
    padding: width < 1280 ? "4rem 1rem 1rem" : "1rem 1.5rem",
    zIndex: 10,
    overflowY:"hidden",
}) 

export const pageContentSubcontainer = (width:number) => style({ 
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5rem",
    height: "inherit",
    maxWidth: "80rem",
    margin: width >= 1280 ? "0 auto" : 0,  
    // backgroundColor: ColorTypes.GREYISHWHITE 
}) 

//scrollbar style for all components
export const scrollBarDiv = style({
    $nest: {
        "&::-webkit-scrollbar": {
            width: "0.25rem",
            height: "0.25rem"
        },
        "&::-webkit-scrollbar-track": {
            borderRadius: "0.625rem",
            backgroundColor: "transparent",
            border: "0.0625rem solid transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "0.625rem",
            backgroundColor: ColorTypes.GREY,
            border: "0.0625rem solid " + ColorTypes.GREY
        },
        "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#4F4F4F",
            border: "0.0625rem solid #4F4F4F"
        }
    }
})
