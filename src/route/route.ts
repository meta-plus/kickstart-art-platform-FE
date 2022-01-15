import { FIconTypes } from "@fantaskticedtechlimited/fui-iconlib"
import Artist from "../Pages/Artist"
import Home from "../Pages/Home"
import Inbox from "../Pages/Inbox"
import Login from "../Pages/Login"
import Newsletter from "../Pages/Newsletter/Newsletter"
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
