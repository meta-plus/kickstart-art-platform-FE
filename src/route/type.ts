import { FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import { Component, ReactNode } from "react";
import { RouteConfig } from "react-router-config";
// import { IconTypes } from "../assets/styles/resource.style";
// import { UserRole } from "../assets/type/backend.type";

export interface AuthRouteConfig extends Omit<RouteConfig, "component"> {
	component: React.ElementType;
	menuName?: string;
	breadcrumbName: string | null;
	hideInMenu?: boolean;
	// role?:UserRole[]
	iconName?: FIconTypes;
	defaultRedirect?: string;
	allowBeforeLogin?: boolean; // temp , later add role control
	// path:string
	// any additional vars
}
