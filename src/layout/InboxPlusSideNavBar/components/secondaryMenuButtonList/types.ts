import { AuthRouteConfig } from "../../../../route/type";

export interface SecondaryMenuButtonListProps { 
    routes: AuthRouteConfig[],
    screenWidth: number,
    onButtonClick: (bool: boolean) => void
}