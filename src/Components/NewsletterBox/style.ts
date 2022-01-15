import {style, cssRaw} from 'typestyle'

export const contentHeaderLeft = style({
    width: "50%",
	height: "100%",
	fontSize: "24px",
	lineHeight: "32px",
	boxSizing: "border-box",
	fontWeight: 600,
	color: "black",
    fontFamily: "Montserrat",
    paddingTop: '10px',
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            paddingBottom: "8px",
            marginLeft: "10px"
        }
    }
})

export const contentHeaderRight = style({
    width: "50%",
    height: "100%",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "10px"
        }
    }
})

export const searchBarNew = style({
    height: "42px !important",
    width: "312px !important",
    float: "right",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "100% !important",
            float: "none"
        }
    }
})

export const searchBar = style({
    width: "315px",
	height: "40px",
	background: "#f3f6fa",
	borderRadius: "8px",
	backgroundImage: `url("../../assets/data/Images/Search.svg")`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "bottom 9px left 12px",
	float: "right",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            width: "100%",
            float: "none"
        }
    }
})

export const boxCard = style({
    boxSizing: "content-box",
	minHeight: "66px",
	border: "1.2px solid rgba(0, 0, 0, 0.08)",
	borderRadius: "8px",
	marginBottom: "24px",
	fontWeight: 500,
    fontFamily: "Montserrat",
	fontSize: "24px",
	padding: "20px 16px 20px 12px",
	background: "white",
	display: "flex",
    cursor: "pointer",
    $nest: {
        '@media only screen and (max-width: 1248px)': {
            flexDirection: "row",
            alignItems: "center",
            padding: "16px 16px 16px 8px",
            fontSize: '16px',
            position: 'static',
            minHeight: '90px',
            left: '24px',
            top: '288px',

            /* Background Colors/White */

            background: '#ffffff',
            /* Brand */

            // border: '2px solid #4564ff',
            borderRadius: '8px',

            /* Inside Auto Layout */

            flex: 'none',
            order: 2,
            flexGrow: 0,
            margin: '24px 0px'
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
            width: "90%"
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

export const moreButtonGrey = style({
    position: 'absolute',
    top: '50%',
    left: '40%',
    '-ms-transform' : 'translateY(-50%)',
	transform: 'translateY(-50%)'
})