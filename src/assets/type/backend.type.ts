
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum emailStatus {
    NEW = "NEW",
    ACTIVE = "ACTIVE",
    ARCHIVE = "ARCHIVE",
    DELETE = "DELETE"
}

export interface FilterEmailsInput {
    mailBoxID: string;
    status?: Nullable<emailStatus[]>;
}

export interface CreateEmailInput {
    senderEmail: string;
    html?: Nullable<string>;
    subject?: Nullable<string>;
    mailBoxID?: Nullable<string>;
    mailBoxEmail?: Nullable<string>;
    text?: Nullable<string>;
    status: emailStatus;
    isAllowToDelete?: Nullable<boolean>;
}

export interface ChangeEmailStatusInput {
    emailID: string;
    status?: Nullable<emailStatus>;
}

export interface FirebaseUserRegisterInput {
    firebaseToken: string;
}

export interface FirebaseUserLoginInput {
    firebaseToken: string;
}

export interface ResponseFormat {
    isSuccess: boolean;
    code: number;
    errorMessage?: Nullable<string>;
}

export interface Email {
    id: string;
    senderEmail: string;
    html: string;
    subject: string;
    mailBoxID: string;
    mailBoxEmail: string;
    text: string;
    status: string;
    isAllowToDelete: boolean;
}

export interface MailBox {
    id: string;
    name: string;
    userID: string;
    email: string;
    createDate: DateTime;
}

export interface User {
    id: string;
    name: string;
    email: string;
    mailBoxID: string;
    mailBoxEmail: string;
    role: UserRole[];
}

export interface AuthFirebaseLoginOutput extends ResponseFormat {
    isSuccess: boolean;
    code: number;
    errorMessage?: Nullable<string>;
    token?: Nullable<string>;
    data?: Nullable<string>;
}

export interface AuthFirebaseRegisterOutput extends ResponseFormat {
    isSuccess: boolean;
    code: number;
    errorMessage?: Nullable<string>;
    data?: Nullable<User>;
}

export interface IQuery {
    getEmailByID(id: string): Nullable<Email> | Promise<Nullable<Email>>;
    getEmailsByMailBoxID(filterEmailsInput: FilterEmailsInput): Nullable<Email[]> | Promise<Nullable<Email[]>>;
    getMailBoxById(id: string): Nullable<MailBox> | Promise<Nullable<MailBox>>;
    getMailBoxByMailBoxEmail(email: string): Nullable<MailBox> | Promise<Nullable<MailBox>>;
    user(userId: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<User[]> | Promise<Nullable<User[]>>;
    me(): User | Promise<User>;
}

export interface IMutation {
    createEmail(createEmailInput: CreateEmailInput): Nullable<Email> | Promise<Nullable<Email>>;
    changeEmailStatus(changeEmailStatusInput: ChangeEmailStatusInput): Nullable<Email> | Promise<Nullable<Email>>;
    firebaseUserRegister(firebaseUserRegisterInput: FirebaseUserRegisterInput): AuthFirebaseRegisterOutput | Promise<AuthFirebaseRegisterOutput>;
    firebaseUserLogin(firebaseUserLoginInput: FirebaseUserLoginInput): AuthFirebaseLoginOutput | Promise<AuthFirebaseLoginOutput>;
    devUserLogin(email: string): AuthFirebaseLoginOutput | Promise<AuthFirebaseLoginOutput>;
}

export type DateTime = any;
type Nullable<T> = T | null;
