export enum Language{
    en_US = "en_US",
    zh_TW = "zh_TW",
    zh_CN = "zh_CN"
}

export enum LocaleCode {
    en="en",
    zh="zh",
}

export type OnClickFunction = () => void
export type onSubmitFuncion<T> = (data:T) => void

