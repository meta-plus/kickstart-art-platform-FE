export interface AuthContextProps<T> {
	currentUser: T | null;
	setCurrentUser: (user: T | null) => void;
	isSignin: boolean;
	setSignin: (signin: boolean) => void;
	signOut: () => void;
}