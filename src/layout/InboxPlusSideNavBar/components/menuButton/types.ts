import { IconTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";


export interface QBMenuButtonProps {
    haveSubMenus: boolean,
    iconName: IconTypes,
    isClicked: boolean,
    // index: number,
    // ancestorIndex?: number,
    disabled?: boolean,
    name: string,
    pathLink: string,
    onButtonClick: (
        // clicked: boolean, 
        // index: number, 
        // haveSubMenus: boolean, 
        // ancestorIndex?: number
    ) => void
}