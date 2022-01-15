import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import { Redirect, SwitchProps } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { AuthRouteConfig } from "./type";

export function AuthPageRoutesRender({
	routes,
	extraProps,
	switchProps,
	redirectPathIfNotExist = "/",
	screenWidth,
}: {
	routes: AuthRouteConfig[];
	extraProps?: any;
	switchProps?: SwitchProps;
	redirectPathIfNotExist?: string;
	screenWidth: number;
}): JSX.Element {
	const { isSignin } = useContext(AuthContext);
	const [currentRoutes, setCurrentRoutes] = useState<AuthRouteConfig[]>([]);
	useEffect(() => {
		setCurrentRoutes(routes);
	}, []);
	useEffect(() => {
		console.log("redirectPathIfNotExist", redirectPathIfNotExist);
	}, []);
	return (
		<>
			<Switch {...switchProps}>
				{currentRoutes &&
					currentRoutes.map((r, i) => {
						// const haveSubRoutes = Array.isArray(r.routes)
						// if again role control, redirect
						if (!isSignin && !r.allowBeforeLogin) {
							// console.log(`Ban ${r.path}`)
							// return
							return (
								<Route
									key={r.key || i}
									path={r.path}
									exact={r.exact}
									strict={r.strict}
									render={() => <Redirect to={redirectPathIfNotExist} />}
								/>
							);
						} else {
							// console.log(`Allow ${r.path}`)
							return (
								<Route
									key={r.key || i}
									path={r.path}
									exact={r.exact}
									strict={r.strict}
									// render={props =>{
									//   console.log("r.routes", r.routes)
									//   return(

									//     <r.component {...props} {...extraProps} routes={r.routes} />
									//   )
									// }}
									render={(props) =>
										r.render ? (
											r.render({
												...props,
												...extraProps,
												route: r,
												screenWidth,
											})
										) : (
											<r.component
												{...props}
												{...extraProps}
												route={r}
												screenWidth
											/>
										)
									}
								/>
							);
						}
					})}
				<Route
					path={"/"}
					exact={true}
					render={() => <Redirect to={redirectPathIfNotExist} />}
				/>
			</Switch>
		</>
	);
}

{
	/* {routes.map((route, i ) => {
    const { path, exact, routes } = route
    if(route.component === undefined)return null
    return <Route 
        key={i}
        path = {path}
        exact = {exact}
        // component = {route.component}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
})} */
}
