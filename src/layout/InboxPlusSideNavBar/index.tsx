import { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { InboxPlusSideNavBarProps } from "./types";
import { MenuButtonList, SecondaryMenuButtonList } from "./components";
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library";
// import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
// import { FSideNavBar } from "../FSideBavBar";
import * as style from "./style";
import {
	FSideBarHandler,
	FSideNavBar,
	FText,
} from "@fantaskticedtechlimited/fui-complib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const InboxPlusSideNavBar = (props: InboxPlusSideNavBarProps) => {
	const { close, setClose } = FSideBarHandler();

	return (
		<div className={style.fragmentWarp}>
			<FSideNavBar
				visible
				logo={
					<Link to="/inbox" className={style.homeLink}><FText
						font={FFontTypes.Large_Title}
						color={FColorTypes.PURE_WHITE}
						children="INBOX+"
					/></Link>
				}
				containerStyle={{
					backgroundColor: "#4564FF"
				}}
				forcedToClose={close}
				topBarStyle={{
					height: "3.5rem"
				}}
			>
				<div className={style.sidebarLine}></div>
				<div className={style.buttonsWarp}>
				<MenuButtonList
					routes={props.routes}
					screenWidth={props.screenWidth}
					onButtonClick={(bool) => setClose(bool)}
					closeOtherMenusWhenClick
				/>
				{/* <FText
					font={FFontTypes.Text}
					color={FColorTypes.PURE_WHITE}
					children={`Env: ${process.env.NODE_ENV}`}
					style={{textAlign: "right"}}
				/> */}
				{/* <SecondaryMenuButtonList
					routes={props.routes}
					screenWidth={props.screenWidth}
					onButtonClick={(bool) => setClose(bool)}
				/> */}
				</div>
			</FSideNavBar>
		</div>
	);
};
