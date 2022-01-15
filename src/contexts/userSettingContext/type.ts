import { Language } from "../../assets/type/frontend.type";

export interface UserSetting{
    language: Language
}

export interface UserSettingContextProps {
    defaultLanguage:Language,
    currentUserSetting: UserSetting ,
    setCurrentUserSetting: (userSetting: UserSetting) => void
    setLanguage: (language: Language) => void,
}