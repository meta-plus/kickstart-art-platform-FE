import { ReactNode } from "react";

export interface FSideNavBarProps {
	logo: ReactNode;
	children: ReactNode;
	isToggled: boolean;
	screenWidth: number;
	visible: boolean;
}
