import { FStyledText } from '@fantaskticedtechlimited/fantasktic-comp-library';
import { ColorTypes, FontTypes } from '@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types';
import { Breadcrumbs } from '@material-ui/core'; // this should be removed later when we create our own Breadcumb
import React, { Fragment, useEffect, useState } from 'react'
import { MatchedRoute, matchRoutes, RouteConfig } from 'react-router-config';
import { Link as LinkRouter, useLocation,} from "react-router-dom";
import {  extractPathLink } from '../../route';
import { AuthRouteConfig } from '../../route/type';
import * as styles from "./styles"


const Breadcumb = ({
    routes
}:{
    routes:RouteConfig[] | AuthRouteConfig[]
}) =>{
    const location = useLocation()
    // const flatRoutes = flattenRoutes(routes as RouteConfig[])
    const [matchedRoutes, setMatchRoutes] = useState<Array<MatchedRoute<any, RouteConfig>>>()
    useEffect(() => {
        // console.log('location', location)
        const matchedRoutes = matchRoutes(routes as RouteConfig[], location.pathname);
        // console.log("BreadcumbMatchedRoutes", matchedRoutes)
        console.log("matchedRoutes", matchedRoutes)
        setMatchRoutes(matchedRoutes)
    }, [location])
    return (
        <>
        <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbDiv}> 
            {
                matchedRoutes?.map((m, i) =>{
                    const authRoute = m.route as AuthRouteConfig 
                    return(
                        <LinkRouter key={i} to={authRoute.defaultRedirect ?? extractPathLink(authRoute.path)} >
                            <FStyledText
                                font={FontTypes.H6}
                                color={ColorTypes.BRAND} 
                            >
                                {authRoute.breadcrumbName}
                            </FStyledText>
                         </LinkRouter>
                    )
                })
            }
        </Breadcrumbs> 
        </>
    )
}

export default Breadcumb