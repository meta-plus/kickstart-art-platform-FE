import { red } from "@material-ui/core/colors"
import {style} from "typestyle"
import {cssRaw} from "typestyle"

export const rightColumn = style({
        marginLeft: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        $nest: {
            '@media only screen and (max-width: 1248px)': {
                marginLeft: "0px",
                marginTop: "56px"
            }
        }
})

export const rightColumnInside = style({

})

cssRaw(`
body{
    top: 0;
    left: 0;
    padding: 0 !important;
    margin: 0;
    overflow: hidden !important;
    /* height: 100vh;
    width: 100vw; */
    background: #FCFCFF;
    height: 100%;
}
`)


