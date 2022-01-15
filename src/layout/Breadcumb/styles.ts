import { ColorTypes, FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { style } from "typestyle"

export const breadcrumbDiv = style({ 
    backgroundColor: ColorTypes.PURPLE_BG,
    borderRadius: "0.5rem",
    boxSizing: "border-box",
    padding: "0.75rem 1.5rem",
    $nest:{
        a:{
            textDecoration: "none",
            $nest:{ 
                "&:hover":{
                    textDecoration: "underline",
                    textDecorationColor: ColorTypes.BRAND
                }
            }
        },
        li:{
            font: FontTypes.H6,
            color: ColorTypes.BRAND
        }
    }
})