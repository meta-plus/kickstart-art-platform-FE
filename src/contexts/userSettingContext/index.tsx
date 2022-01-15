import { createContext, ElementType, useState } from "react";
import { Language } from "../../assets/type/frontend.type";
import { UserSetting, UserSettingContextProps } from "./type";

export const UserSettingContext = createContext<UserSettingContextProps>({
	defaultLanguage:Language.en_US,
    currentUserSetting:{
        language:Language.en_US,
        // questionBank:null
    },
    setCurrentUserSetting: () =>{},
    setLanguage: () =>{},
});

export const WithUserSettingContext = (Component: ElementType) => {
	return function WithUserSettingContext(props: any) {
        const [currentUserSetting, setCurrentUserSetting] = useState<UserSetting>({
            language:Language.en_US,
            // questionBank:null
        })
        const SetLanguage = (language: Language) => {
            let newSetting = {... currentUserSetting}
            newSetting.language = language
            setCurrentUserSetting(newSetting)
        }
		const defaultContextValue: UserSettingContextProps = {
            defaultLanguage:Language.en_US,
            currentUserSetting:currentUserSetting, 
            setCurrentUserSetting:setCurrentUserSetting,
            setLanguage:SetLanguage,
		};
		return (
			<UserSettingContext.Provider value={defaultContextValue}>
				<Component {...props}/>
			</UserSettingContext.Provider>
		);
	};
};