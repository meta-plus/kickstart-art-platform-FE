import { Component, ComponentType } from "react";
import { OnClickFunction } from "../../assets/type/frontend.type";

export interface LoadingPageWrapperChildrenProps{
    isLoadingPageWrapperLoading:boolean
    onLoadingStart:OnClickFunction
    onLoadingEnd:OnClickFunction
}

export interface LoadingPageWrappeProps{
    children: ComponentType<LoadingPageWrapperChildrenProps>
}