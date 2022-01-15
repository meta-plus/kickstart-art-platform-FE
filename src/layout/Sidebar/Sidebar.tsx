import { ReactComponent as InboxLogo } from "../../assets/data/Images/inbox.svg";
import { ReactComponent as BookmarkLogo } from "../../assets/data/Images/bookmark.svg";
import { ReactComponent as UserLogo } from "../../assets/data/Images/user.svg";
import { ReactComponent as VectorLogo } from "../../assets/data/Images/Vector.svg";
import "./Sidebar.css";
import { SideBarProps } from "./type";

export const Sidebar = (props:SideBarProps) => {
	return (
		
		<div className="sidebar animate__animated animate__slideInLeft" style={{
			display: props.isOpen ? props.screenWidth > 1200 ? 'block' : 'none' : 'none'
		}}>
			<div className="logo-wrap">
				<label className="logo-text">INBOX+</label>
			</div>
			<div className="sidebar-line"></div>
			<div className="sidebar-menu">
				<div className="sidebar-menu-option active">
					<InboxLogo className="svgLogo" />
					<label className="option-label">Inbox</label>
				</div>
				<div className="sidebar-menu-option hover">
					<BookmarkLogo className="svgLogo" />
					<label className="option-label">Subscription</label>
				</div>
				<div className="sidebar-menu-option hover">
					<UserLogo className="svgLogo" />
					<label className="option-label">Folder</label>
				</div>
				<div className="sidebar-menu-option hover">
					<VectorLogo className="svgLogo" />
					<label className="option-label">Profile</label>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
