import {
	FLogo,
	FSVGButton,
	FIcon,
} from "@fantaskticedtechlimited/fantasktic-comp-library";
import React, { useState, useEffect, useRef } from "react";
import { ColorTypes } from "../../assets/styles/resource.style";
import * as styles from "./style";
import { FSideNavBarProps } from "./type";
import * as globalStyles from "../../assets/styles/global.styles";
export const FSideNavBar = (props: FSideNavBarProps) => {
	const [isToggled, setIsToggled] = useState<boolean>(false);
	const toggledSideNavBarRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (
			toggledSideNavBarRef.current &&
			!toggledSideNavBarRef.current.contains(event.target)
		)
			setIsToggled(false);
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (isToggled) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
	}, [isToggled]);

	useEffect(() => {
		setIsToggled(false);
	}, [props.isToggled]);

	return (
		<>
        {/* Top NavBar when tablet mode */}
			{props.screenWidth < 1280 ? (
				<div className={styles.FTopNavBarDiv(props)}>
					{props.logo}
					<FSVGButton
						size="large"
						borderRadius="0.25rem"
						fillColor={ColorTypes.PURPLE_BG}
						padding="0.25rem"
						onClick={() => setIsToggled(true)}
					>
						<FIcon name="menu" size="large" strokeColor={ColorTypes.BRAND} />
					</FSVGButton>
				</div>
			) : undefined}
			<div className={styles.FSlideInBackgroundDiv(props, isToggled)}>
				<div
					className={
						styles.FSideNavBarDiv(props)
                        //  + " " + globalStyles.scrollBarDiv
					}
					ref={props.screenWidth >= 1280 ? undefined : toggledSideNavBarRef}
				>
					<div className={styles.FSideNavBarContentDiv(props)}>
						{props.screenWidth >= 1280 ? (
							props.logo
						) : (
							<FSVGButton
								size="large"
								borderRadius="0.25rem"
								fillColor={ColorTypes.PURPLE_BG}
								padding="0.25rem"
								align="flex-end"
								onClick={() => setIsToggled(false)}
							>
								<FIcon
									name="close"
									size="large"
									strokeColor={ColorTypes.BRAND}
								/>
					
							</FSVGButton>
						)}
						{props.children}
					</div>
				</div>
			</div>
		</>
	);
};
