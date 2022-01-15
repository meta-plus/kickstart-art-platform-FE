import {style, cssRaw} from 'typestyle'
import { rightColumn } from '../../style'

export const boxNewsUp = style({
    width: '100%',
    display: 'flex',
    position: 'fixed',
    maxWidth: '896px',
    zIndex: 10,
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            // position: 'fixed'
            maxWidth: "960px",
            padding: "8px",
            boxSizing: "border-box"
        }
    }
})

export const upBackButton = style({
    width: '40px',
    height: '40px',
    $nest: {
        '&:hover': {
            opacity: 0.7,
            cursor: "pointer"
        }
    },
    boxSizing: "border-box"
})

export const boxCardNews = style({

})

export const upTitle = style({
    fontFamily: 'Montserrat',
    padding: "12px 5px 5px 10px",
    color: "black",
    width: "100%",
    $nest: {
        '@media only screen and (max-width: 1248px)':{
            width: "100%"
        }
    }
})

export const upActions = style({

})

export const upMenuButton = style({
})

export const boxRightButtons = style({
    width: '40px',
    height: '40px',
    background: '#F3F6FA',
    borderRadius: '8px',
    $nest: {
        '&:hover':{
            opacity: 0.7,
            cursor: "pointer"
        }
    }
})

export const moreBtn = style({
    padding: '8px'
})

export const boxCard = style({
    boxSizing: "content-box",
	minHeight: "66px",
	borderRadius: "8px",
	marginBottom: "24px",
	fontWeight: 500,
    fontFamily: "Montserrat",
	fontSize: "24px",
	padding: "20px 16px 20px 12px",
	display: "flex",
    cursor: "pointer",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            flexDirection: "row",
            alignItems: "center",
            padding: "0 16px 16px 8px",
            fontSize: '16px',
            position: 'static',
            minHeight: '90px',
            left: '24px',

            /* Background Colors/White */

            /* Brand */
            borderRadius: '8px',

            /* Inside Auto Layout */

            flex: 'none',
            order: 2,
            flexGrow: 0,
        }
    }

})

export const boxCardLeft = style({
    minHeight: "66px",
    width: "3%",
    position: "relative",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "5%",
        }
    }
})

export const activeCircle = style({
    width: '8px',
	height: '8px',
	borderRadius: '50px',
	background: '#4564ff',
	position: 'absolute',
	top: '50%',
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "4px",
            height: "4px"
        }
    }
})

cssRaw(`
    .activeCircle{
        -ms-transform: translateY(-50%),
	    transform: translateY(-50%)
    }
`)

export const boxCardMiddle = style({
    height: "100%",
    width: "94%",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "100%"
        }
    }
})

export const boxCardLine = style({
    width: "100%",
    height: '1px',
	background: 'lightgrey',
	marginTop: '15px'
})

export const boxCardAuthor = style({
    fontSize: '14px',
    color: '#333',
    marginTop: '6px',
    display: 'flex'
})

export const cardActive = style({
    border: "3px solid #4564ff"
})

export const authorProfile = style({
    borderRadius: '50px',
	width: '24px',
	height: '24px'
})

export const authorProfileText = style({
    padding: '4px',
	display: 'flex',
	position: 'relative',
	width: '100%'
})

export const datePosted = style({
    position: 'absolute',
	right: 0,
	color: '#b0b6bb',
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            fontSize: '12px'
        }
    }
})

export const boxCardRight = style({
    width: '3%',
	minHeight: '66px',
	position: 'relative'
})

export const boxCardContent = style({

})