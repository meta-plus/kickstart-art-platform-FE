import { FIconTypes } from "@fantaskticedtechlimited/fui-iconlib"
import Artist from "../Pages/Artist"
import Home from "../Pages/Home"
import Inbox from "../Pages/Inbox"
import Login from "../Pages/Login"
import MyFundedProject from "../Pages/MyFundedProject"
import MyNFT from "../Pages/MyNFT"
import MyProject from "../Pages/MyProject"
import Newsletter from "../Pages/Newsletter/Newsletter"
import ProjectPage from "../Pages/Project"
import SwapTokenPage from "../Pages/SwapToken"
import { AuthRouteConfig } from "./type"

const routes: AuthRouteConfig[] = [
	{
		path: "/login",
		component: Login,
		exact: false,
		mainMenuButtonName:"Login",
		breadcrumbName: "Login",
		hideInMenu: true,
		allowBeforeLogin: true,
	},
	// {
	// 	path: "/inbox",
	// 	component: Inbox,
	// 	mainMenuButtonName: "Inbox",
	// 	breadcrumbName: "Inbox",
	// 	exact: true,
	// 	iconName: FIconTypes.EMAIL,
	// 	allowBeforeLogin: true,
	// },
	// {
	// 	path: "/subscriptions",
	// 	component: Inbox,
	// 	mainMenuButtonName: "Subscription",
	// 	breadcrumbName: "Subscription",
	// 	exact: true,
	// 	iconName: FIconTypes.BOOK_MARK,
	// 	allowBeforeLogin: true,
	// },
	// {
	// 	path: "/folder",
	// 	component: Inbox,
	// 	mainMenuButtonName: "Folder",
	// 	breadcrumbName: "Folder",
	// 	exact: true,
	// 	iconName: FIconTypes.BOOK,
	// 	allowBeforeLogin: true,
	// },
	// {
	// 	path: "/archive",
	// 	component: Inbox,
	// 	mainMenuButtonName: "Archive",
	// 	breadcrumbName: "Archive",
	// 	exact: true,
	// 	iconName: FIconTypes.DELETE,
	// 	allowBeforeLogin: true,
	// },
	{
		path: "/artist",
		component: Artist,
		mainMenuButtonName: "Artist",
		breadcrumbName: "Artist",
		exact: true,
		iconName: FIconTypes.BOOK,
		allowBeforeLogin: true,
	},
	{
		path: "/project",
		component: ProjectPage,
		mainMenuButtonName: "Fund Projects",
		breadcrumbName: "Fund Projects",
		exact: true,
		iconName: FIconTypes.BOOK,
		allowBeforeLogin: true,
	},
	{
		path: "/myproject",
		component: MyProject,
		mainMenuButtonName: "My Projects",
		breadcrumbName: "My Projects",
		exact: true,
		iconName: FIconTypes.MENU,
		allowBeforeLogin: true,
	},
	{
		path: "/myfundedproject",
		component: MyFundedProject,
		mainMenuButtonName: "Funded Projects",
		breadcrumbName: "Funded Projects",
		exact: true,
		iconName: FIconTypes.BOOK_MARK,
		allowBeforeLogin: true,
	},
	{
		path: "/mynft",
		component: MyNFT,
		mainMenuButtonName: "My NFTs",
		breadcrumbName: "My NFTs",
		exact: true,
		iconName: FIconTypes.MENU,
		allowBeforeLogin: true,
	},
	// MyFundedProjectPage
	{
		path: "/swapToken",
		component: SwapTokenPage,
		mainMenuButtonName: "Swap Token",
		breadcrumbName: "Swap Token",
		exact: true,
		iconName: FIconTypes.MENU,
		allowBeforeLogin: true,
	},

	// SwapTokenPage
	{
		path: ["/home", "/"],
		component: Home,
		mainMenuButtonName: "Home",
		breadcrumbName: "Home",
		exact: true,
		iconName: FIconTypes.HOME,
		hideInMenu: true,
		allowBeforeLogin: true,
	},
	// {
	// 	path:"/newsletter/:newsletterId",
	// 	component: Newsletter,
	// 	breadcrumbName: "Newsletter",
	// 	exact: true,
	// 	hideInMenu:true,
	// 	allowBeforeLogin:true,
	// },

]

export default routes
