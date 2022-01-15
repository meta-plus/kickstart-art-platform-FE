import "./Navbar.css";
import logo from "../../assets/data/Images/logo-white.svg";
import menu from "../../assets/data/Images/menu.svg";
import { NavBarProps } from "./type";

export default function Navbar(props: NavBarProps) {
	const handleOnClick = () => {
		if (props.isSideBarOpen) {
			props.onCloseSideBar();
		} else {
			props.onOpenSideBar();
		}
	};
	return (
		<>
			<div className="navbar">
				<img src={logo} className="navbar-logo" />
				<img src={menu} className="navbar-menu" onClick={handleOnClick} />
			</div>
		</>
	);
}
