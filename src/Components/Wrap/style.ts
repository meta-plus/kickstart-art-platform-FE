import {style} from "typestyle"

export const container = style({
    maxWidth: "960px",
    height: "100vh",
    background: "white",
    margin: "0 auto",
    padding: "32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: "left",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            padding: "0px"
        }
    }
})

export const contentHeader = style({
    maxWidth: "896px",
    minHeight: "40px",
    marginBottom: "24px",
    boxSizing: "border-box",
    display: "flex",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            maxWidth: "960px",
            marginTop: "10px",
            flexDirection: "column",
            boxSizing: "border-box"
        }
    },
})

export const contentWrapper = style({
    width: "100%",
    height: "100%",
    background: "#FCFCFF",
    borderRadius: "12px",
    boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.12)",
    padding: "32px",
    boxSizing: "border-box",
    overflow: "scroll",
    zIndex: 10,  
    '-ms-overflow-style': 'none',  /* IE and Edge */
    scrollbarWidth: 'none',
    overflowX: "hidden",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            borderRadius: "0px",
            padding: "24px"
        },
        // '&::-webkit-scrollbar': {
        //     display: 'none'
        // }
    }
})

export const contentHeaderLeft = style({
    width: "50%",
    height: "100%",
    fontSize: "24px",
    lineHeight: "32px",
    boxSizing: "border-box",
    padding: "5px",
    color: "black"
})

export const contentHeaderRight = style({
    width: "50%",
    height: "100%"
})

export const boxBorderShadow = style({
    position: "absolute",
    width: "896px",
    height: "20px",
    top: "96px",
    zIndex: 50,
    borderRadius: "12px",
    opacity: 0.5,
    boxShadow: "0px 10px 10px -10px rgba(0, 0, 0, 0.2) inset",
    $nest: {
        '@media only screen and (max-width: 1248px)':{
            display: "none"
        }
    }
})

export const boxBottomShadow = style({
    position: "absolute",
    width: "896px",
    height: "20px",
    bottom: "32px",
    zIndex: 50,
    borderRadius: "12px",
    opacity: 0.5,
    boxShadow: "0px -10px 10px -10px rgba(0, 0, 0, 0.2) inset",
    $nest: {
        '@media only screen and (max-width: 1248px)':{
            display: "none"
        }
    }
})