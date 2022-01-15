import React from 'react'
import './Sidebar2.css'
import { ReactComponent as InboxLogo} from '../../Images/inbox.svg'
import { ReactComponent as BookmarkLogo}  from '../../Images/bookmark.svg'
import user from '../../Images/user.svg'
import Vector from '../../Images/Vector.svg'

export const Sidebar2 = () => {
    return(
        // <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
        <div className="sidebar2" >
            <div className="logo-wrap">
                <label className="logo-text">INBOX+</label>
            </div>
            <div className="sidebar-line"></div>
            <div className="sidebar-menu">
                <div className="sidebar-menu-option active">
                    <InboxLogo />
                    <label className="option-label">Inbox</label>
                </div>
                <div className="sidebar-menu-option hover">
                    <BookmarkLogo />
                    <label className="option-label">Subscription</label>
                </div>
                <div className="sidebar-menu-option hover">
                    {/* <img src={Vector}/> */}
                    <label className="option-label">Folder</label>
                </div>
                <div className="sidebar-menu-option hover">
                    {/* <img src={user}/> */}
                    <label className="option-label">Profile</label>
                </div>
            </div>
        </div>
        // </Animated>
    )
}

export default Sidebar2