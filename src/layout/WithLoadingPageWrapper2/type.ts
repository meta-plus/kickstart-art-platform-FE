import { ComponentType } from "react";
import { OnClickFunction } from "../../assets/type/frontend.type";

export interface LoadingPageWrapperContextProps{
    isLoadingPageWrapperLoading:boolean
    setLoadingStart:OnClickFunction
    setLoadingEnd:OnClickFunction
}
