import { AuthRouteConfig } from "../../../../route/type";

export interface MenuButtonListProps { 
    routes: AuthRouteConfig[],
    screenWidth: number,
    onButtonClick: (bool: boolean) => void
    closeOtherMenusWhenClick?:boolean
}