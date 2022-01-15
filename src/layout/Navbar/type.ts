import { OnClickFunction } from "../../assets/type/frontend.type";

export interface NavBarProps{
    onOpenSideBar:OnClickFunction
    onCloseSideBar:OnClickFunction
    isSideBarOpen:boolean
}