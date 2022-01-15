import { getAuth, signOut } from "firebase/auth";
import { createContext, ElementType, useState } from "react";
import { User } from "../../assets/type/backend.type";
import firebaseAppWithConfig from "../../config/firebaseConfig";
import { AuthContextProps } from "./type";

type WithUserAuthContext = AuthContextProps<User>

export const AuthContext = createContext<WithUserAuthContext>({
	currentUser: null,
	setCurrentUser: () => {},
	isSignin: false,
	setSignin: () => {},
	signOut: () => {},
});

export const WithAuthContext = (Component: ElementType) => {
	return function WithAuthContext(props: any) {
		const auth = getAuth(firebaseAppWithConfig);
		const [currentUser, setCurrentUser] = useState<User | null>(null);
		const [isSignin, setSignin] = useState<boolean>(false);
		const defaultContextValue: WithUserAuthContext = {
			currentUser: currentUser,
			setCurrentUser: setCurrentUser,

			isSignin,
			setSignin,
			signOut: async () => {
				signOut(auth);
				localStorage.clear();
				sessionStorage.clear();
				await indexedDB.deleteDatabase("firebaseLocalStorageDb");
				setCurrentUser(null);
				setSignin(false);
			},
		};
		return (
			<AuthContext.Provider value={defaultContextValue}>
				<Component {...props}/>
			</AuthContext.Provider>
		);
	};
};
