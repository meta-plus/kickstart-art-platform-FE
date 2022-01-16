import * as styles from "./assets/styles/global.styles"
import ScreenSize from "./utils/screensize"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import routes from "./route/route"
import { AuthPageRoutesRender } from "./route/AuthPageRoutesRender"
import { Fragment } from "react"
import { InboxPlusSideNavBar } from "./layout/InboxPlusSideNavBar"
import TopNav from "./layout/TopNav"
import * as style from "./style"
import { WithApolloGQLContext } from "./contexts/apolloGQLContext"
import { WithAuthContext } from "./contexts/authContext"
import { WithUserSettingContext } from "./contexts/userSettingContext"
import WebFont from "webfontloader"
import { MetaMaskProvider, useMetaMask } from "metamask-react"

WebFont.load({
	google: {
		families: ["Montserrat:500", "sans-serif"],
	},
})

function App() {
	const [width] = ScreenSize()
	const { account } = useMetaMask()
	return (
		<Fragment>
			<Router>
				<div className={styles.pageContainer}>
					<InboxPlusSideNavBar screenWidth={width} routes={routes} />
					<div className={style["rightColumn"]}>
						<TopNav />
						<div className={style["rightColumnInside"]}>
							{account && (
								<AuthPageRoutesRender
									routes={routes}
									screenWidth={width}
								/>
							)}

							{/* <Newsletter /> */}
						</div>
					</div>
				</div>
			</Router>

			{/* The taplet view will be fixed tomorrow */}
		</Fragment>
	)
}

const withMetamaskApp = (
	<MetaMaskProvider>
		<App />
	</MetaMaskProvider>
)

export default WithApolloGQLContext(
	WithAuthContext(WithUserSettingContext(() => withMetamaskApp))
)
