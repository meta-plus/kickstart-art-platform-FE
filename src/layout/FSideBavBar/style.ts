import { style } from "typestyle";
import { ColorTypes } from "../../assets/styles/resource.style";
import { FSideNavBarProps } from "./type";

export const FSlideInBackgroundDiv = (
	props: FSideNavBarProps,
	isToggled: boolean
) =>
	style({
		backgroundColor:
			props.screenWidth >= 1280 ? "transparent" : ColorTypes.DARKGREY,
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		height: "100vh",
		justifyContent: props.screenWidth >= 1280 ? "flex-start" : "flex-end",
		left: props.screenWidth >= 1280 ? 0 : undefined,
		minHeight: props.screenWidth >= 1280 ? "45rem" : "30rem",
		position: "fixed",
		right: props.screenWidth >= 1280 ? undefined : isToggled ? 0 : "-100vw",
		top: 0,
		transition: "all 0.2s ease-in-out",
		visibility: props.screenWidth >= 1280 || isToggled ? "visible" : "hidden",
		width: "100vw",
		zIndex: isToggled ? 20 : 10,
	});

export const FSideNavBarDiv = (props: FSideNavBarProps) =>
	style({
		backgroundColor: "#4564FF",
		// boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
		boxSizing: "border-box",
		height: "100%",
		overflowX: "hidden",
		overflowY: "auto",
		position: "fixed",
		top: 0,
		width: "15rem",
		zIndex: 20,
	});

export const FSideNavBarContentDiv = (props: FSideNavBarProps) =>
	style({
		display: props.visible ? "flex" : "none",
		flexDirection: "column",
		height: "100%",
		minHeight: props.screenWidth >= 1280 ? "45rem" : "30rem",
        padding: "0 1rem 0 1rem",
	});

export const FTopNavBarDiv = (props: FSideNavBarProps) =>
	style({
		alignItems: "center",
		backdropFilter: "blur(1.5rem)",
		backgroundColor: "#4564ff",
		border: "0.063rem solid " + ColorTypes.SOFTSTROKE,
		boxShadow: "0rem 0rem 0.5rem " + ColorTypes.PURPLE_BG,
		boxSizing: "border-box",
		display: !props.visible ? "none" : "flex",
		flexDirection: "row",
		height: "3.5rem",
		justifyContent: "space-between",
		padding: "0.75rem 1rem",
		position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 15,
	});
