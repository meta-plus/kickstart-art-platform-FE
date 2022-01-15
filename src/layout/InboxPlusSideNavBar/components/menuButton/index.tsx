import {
	FIcon,
	FStyledText,
} from "@fantaskticedtechlimited/fantasktic-comp-library";
import {
	ColorTypes,
	FontTypes,
} from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, IconButtonType } from "../../../../Components/IconButton";

import * as styles from "./styles";
import { QBMenuButtonProps } from "./types";

export const QBMenuButton = (props: QBMenuButtonProps) => {
	const location = useLocation();
	const [homeLink, setHomeLink] = useState<boolean>(false);

	useEffect(() => {
		if (location.pathname === "/") {
			location.pathname = "/home";
			setHomeLink(true);
		} else setHomeLink(false);
	}, [location]);

	return (
		<Link
			className={styles.QBMenuButtonDiv(props, homeLink)}
			to={props.pathLink}
			onClick={() => {
				props.onButtonClick(
					// true,
					// props.index,
					// props.haveSubMenus,
					// props.ancestorIndex
				);
			}}
		>
			<FIcon
				name={props.iconName}
				size="small"
				strokeColor={
					props.isClicked || homeLink ? ColorTypes.BRAND : ColorTypes.PUREWHITE
				}
			/>
			<div style={{ flexGrow: props.haveSubMenus ? 1 : 0 }}>
				<FStyledText
					font={FontTypes.R14}
					color={
						// props.isClicked || homeLink ? ColorTypes.BRAND : ColorTypes.GREY
						props.isClicked || homeLink ? ColorTypes.BRAND : ColorTypes.PUREWHITE
					}
					whiteSpace="pre-wrap"
				>
					{props.name}
				</FStyledText>
			</div>
			{props.haveSubMenus ? (
				<IconButton active type={IconButtonType.arrowDown} iconSize={16} />
			) : undefined}
		</Link>
	);
};