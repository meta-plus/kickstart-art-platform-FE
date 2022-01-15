import {style} from 'typestyle'

export const logoWarp = style({
    paddingTop: "24px",
    fontSize: "32px",
    paddingLeft: "4px",
    boxSizing: "border-box",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            padding: "0px"
        }
    }
})

export const fragmentWarp = style({
    position: "relative",
    boxSizing: "border-box"
})

export const buttonsWarp = style({
    position: "absolute",
    top: "86px",
    width: "208px",
    paddingTop: "24px",
    boxSizing: "border-box"
})

export const sidebarLine = style({
    width: "185px",
    background: "white",
    height: "2px",
    marginTop: "20px",
})

export const homeLink = style({
    textDecoration: "none"
})