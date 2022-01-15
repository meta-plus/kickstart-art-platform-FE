import { RouteConfig } from "react-router-config";

export function flattenRoutes(routes: RouteConfig[]): RouteConfig[] {
	return [
		...routes,
		...routes.reduce<RouteConfig[]>(
			(accum, route) => [...accum, ...(route.routes ? flattenRoutes(route.routes) : [])],
			[]
		),
	];
}

export function extractPathLink(path:RouteConfig["path"]){
    if(!path)return "/"
    if(Array.isArray(path)){
        if(path.length > 0){
            return path[path.length - 1]
        }else{
            return "/"
        }
    }else{
        return path?.split(":")[0]
    }
}
