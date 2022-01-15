import { FSecondaryMenuButton } from "@fantaskticedtechlimited/fantasktic-comp-library";
import { useLocation } from "react-router-dom";
import { extractPathLink } from "../../../../route";
import { AuthRouteConfig } from "../../../../route/type";
import * as styles from "./styles";
import { SecondaryMenuButtonListProps } from "./types";

export const SecondaryMenuButtonList = (props: SecondaryMenuButtonListProps) => {
  const location = useLocation();

  const handleButtonClick = (bool: boolean) => props.onButtonClick(!bool);

  return (
    <div className={styles.secondaryMenuListDiv}>
      {
        props.routes.map((r: AuthRouteConfig, i: number) => {
          const isSelected = location.pathname === r.path;
          if (r.hideInMenu) return;
          if (i > 6 && i < 9)  //Logout still need ?
            return (
              <FSecondaryMenuButton
                key={i}
                iconName={r.icon!}
                isClicked={isSelected}
                label={r.subMenuButtonName!}
                pathLink={extractPathLink(r.path)}
                screenWidth={props.screenWidth}
                onButtonClick={handleButtonClick}
              />
            );
        })
      }
    </div>
  );
};
