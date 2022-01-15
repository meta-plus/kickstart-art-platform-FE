import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { extractPathLink } from "../../../../route";
import { AuthRouteConfig } from "../../../../route/type";
import * as styles from "./styles";
import { MenuButtonListProps } from "./types";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FLinkButton } from "@fantaskticedtechlimited/fui-complib";
export const MenuButtonList = (props: MenuButtonListProps) => {
    const location = useLocation();
    const [isClicked, setIsClicked] = useState<boolean[]>([]);
    const [pathIsSelected, setPathIsSelected] = useState<boolean[]>([]);
    let tempPathIsSelected: boolean[] = [];
    const closeAllMenu = () => {
        let tempClickArray = Array(props.routes.length).fill(false);
        setIsClicked(tempClickArray);
    };
    const initializePathSelection = () => {
        for (let index = 0; index < props.routes.length; index++) {
            tempPathIsSelected.push(false);
        }
        setPathIsSelected(tempPathIsSelected);
    };
    useEffect(() => {
        closeAllMenu();
    }, []);
    useEffect(() => {
        initializePathSelection();
        tempPathIsSelected = [...pathIsSelected];
        if (props.routes) {
            props.routes.map((r: AuthRouteConfig, i: number) => {
                if (location.pathname === r.path) {
                    tempPathIsSelected[i] = true;
                }
                if (Array.isArray(r.path)) {
                    let bool: boolean = false;
                    r.path.map((pathname: string) => {
                        // Check whether the pathname is home page
                        (pathname === "/" || pathname === "/home") &&
                        location.pathname === pathname
                            ? (bool = true)
                            : (bool = false);
                    });
                    if (bool) tempPathIsSelected[i] = true;
                }
            });
            setPathIsSelected(tempPathIsSelected);
        }
    }, [props.routes]);
    const handleButtonClick = (index: number) => {
        let newIsClicked: boolean[] = [];
        if (props.closeOtherMenusWhenClick) {
            newIsClicked = Array(props.routes.length).fill(false);
        } else {
            newIsClicked = [...isClicked];
        }
        newIsClicked[index] = !newIsClicked[index];
        setIsClicked(newIsClicked);
        initializePathSelection();
        props.routes.map((_, i: number) => {
            if (i === index) {
                tempPathIsSelected[i] = true;
            }
        });
        setPathIsSelected(tempPathIsSelected);
        props.onButtonClick(true);
    };
    return (
        <div className={styles.menuListDiv}>
            {props.routes.map((r: AuthRouteConfig, i: number) => {
                let isSelected = pathIsSelected[i];
                if (r.hideInMenu) return;
                return (
                    <Fragment key={i}>
                        <FLinkButton
                            key={i}
                            containsRouteChildren={r.routes !== undefined}
                            pathIsSelected={isSelected}
                            leadingIcon={{
                                name: r.iconName!,
                                strokeColor: isSelected
                                 ? "#4564FF"
                                 : FColorTypes.PURE_WHITE,
                            }}
                            label={r.mainMenuButtonName!}
                            pathLink={r.defaultRedirect ?? extractPathLink(r.path)}
                            onClick={() => handleButtonClick(i)}
                            // style={{
                            //  backgroundColor: isSelected
                            //      ? FColorTypes.ORANGE
                            //      : FColorTypes.GREY,
                            // }}
                            labelStyle={{
                             color: isSelected ? FColorTypes.PURE_WHITE : FColorTypes.BLACK,
                            }}
							labelClassName={styles.labelButton(isSelected)}
							className={styles.leftButton1(isSelected)}
							style={{
								backgroundColor: isSelected ? "white" : "#4564FF",
								width: "90%",
								color: "white"
							}}
                        />
                        <div
                            key={`subMenuButtonList_${i}`}
                            className={styles.subMenuListDiv(isClicked[i])}
                        >
                            {r.routes &&
                                r.routes.map((subR: AuthRouteConfig, subI: number) => {
                                    const haveSubSubMenus = Array.isArray(subR.routes);
                                    const subMenuButtonIsSelected = location.pathname.includes(
                                        subR.path
                                    );
                                    if (subR.hideInMenu) return;
                                    return (
                                        <FLinkButton
                                            key={subI}
                                            containsRouteChildren={haveSubSubMenus}
                                            pathIsSelected={subMenuButtonIsSelected}
                                            leadingIcon={{
                                                name: subR.iconName!,
                                            }}
                                            label={subR.mainMenuButtonName!}
                                            pathLink={extractPathLink(subR.path)}
                                            onClick={() => handleButtonClick(i)}
                                        />
                                    );
                                })}
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};