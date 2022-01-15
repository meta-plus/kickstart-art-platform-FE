import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	Auth,
	createUserWithEmailAndPassword,
	getIdToken,
	signInWithEmailAndPassword,
	FacebookAuthProvider,
	OAuthCredential,
	OAuthProvider,
	sendSignInLinkToEmail,
	signInWithEmailLink,
	isSignInWithEmailLink,
	User as FirebaseUser,
} from "firebase/auth";
import {useContext, useEffect, useState} from "react";
import firebaseAppWithConfig from "../../config/firebaseConfig";
import {useHistory} from "react-router-dom";
import {gql, useMutation, useQuery} from "@apollo/client";
import {
	AuthFirebaseLoginOutput,
	FirebaseUserLoginInput,
	FirebaseUserRegisterInput,
	User,
	UserRole,
} from "../../assets/type/backend.type";
import {AuthContext} from "../../contexts/authContext";
import {JWT_TOKEN} from "../../assets/data/data";
import {useCustomLazyQuery} from "../../utils/useCustomLazyQuery";
import {GET_ME_QUERY} from "../../apiService/auth";
import { domainNameGenerator } from "../../utils/domainNameGenerator";

const FIREBASEUSER_LOGIN_MUTATION = gql`
	mutation firebaseUserLogin(
		$firebaseUserLoginInput: FirebaseUserLoginInput!
	) {
		firebaseUserLogin(firebaseUserLoginInput: $firebaseUserLoginInput) {
			isSuccess
			errorMessage
			token
		}
	}
`;

const FIREBASEUSER_REGISTER_MUTATION = gql`
	mutation firebaseUserRegister(
		$firebaseUserRegisterInput: FirebaseUserRegisterInput!
	) {
		firebaseUserRegister(
			firebaseUserRegisterInput: $firebaseUserRegisterInput
		) {
			isSuccess
			errorMessage
			data {
				id
				name
				role
				email
			}
		}
	}
`;
export enum FirebaseProvider {
	GOOGLE = "GOOGLE",
	FACEBOOK = "FACEBOOK",
	APPLE = "APPLE",
	// CUSTOM="CUSTOM",
}

function Login() {
	const history = useHistory();
	const successUrl = "/home";
	const {isSignin, setSignin, setCurrentUser, signOut} =
		useContext(AuthContext);
	let auth = getAuth(firebaseAppWithConfig);
	const [firebaseUserLoginMutation] = useMutation<
		{firebaseUserLogin: AuthFirebaseLoginOutput},
		{firebaseUserLoginInput: FirebaseUserLoginInput}
	>(FIREBASEUSER_LOGIN_MUTATION);
	const [firebaseUserRegisterMutation] = useMutation<
		User,
		{firebaseUserRegisterInput: FirebaseUserRegisterInput}
	>(FIREBASEUSER_REGISTER_MUTATION);
	const getMeApi = useCustomLazyQuery<{me: User}>(GET_ME_QUERY);
	const getUserInfo = async () => {
		try {
			console.log("JWT_TOKEN", localStorage.getItem(JWT_TOKEN));
			if (!localStorage.getItem(JWT_TOKEN)) {
				return;
			}
			const getMeApiRes = await getMeApi({});
			console.log("getMeApiRes", getMeApiRes);
			if (getMeApiRes.data) {
				setCurrentUser(getMeApiRes.data.me);
				setSignin(true);
			} else {
				signOut();
			}
		} catch (error) {
			console.error("error", error);
			signOut();
		}
	};

	async function handleAuthGetCurrentUser(_auth_currentUser: FirebaseUser) {
		try {
			console.log("_auth_currentUser", _auth_currentUser);
			const firebaseToken = await getIdToken(_auth_currentUser, true);
			await handleSignInSuccess(firebaseToken);
		} catch (error) {
			setIsLoading(false);
			alert(`handleAuthGetCurrentUser error. ${JSON.stringify(error)}`);
			signOut();
		}
	}
	async function handleSignInSuccess(firebaseToken: string) {
		// history.push('/')
		try {
			console.log("handleSignInSuccess firebase token", firebaseToken);
			let loginResult = await firebaseUserLoginMutation({
				variables: {
					firebaseUserLoginInput: {
						firebaseToken: firebaseToken,
					},
				},
			});
			if (loginResult.data?.firebaseUserLogin.isSuccess) {
				console.log(
					`first login success. ${JSON.stringify(loginResult.data)}`
				);
				const jwtToken = loginResult.data?.firebaseUserLogin
					.token as string;
				console.log("jwtToken", jwtToken);
				await localStorage.setItem(JWT_TOKEN, jwtToken);
				await getUserInfo();
				return history.push(successUrl);
			} else {
				console.log(
					`first login failed. ${JSON.stringify(
						loginResult.data?.firebaseUserLogin
					)}`
				);
				const registerResult = await firebaseUserRegisterMutation({
					variables: {
						firebaseUserRegisterInput: {
							firebaseToken: firebaseToken,
						},
					},
				});
				const secondLoginResult = await firebaseUserLoginMutation({
					variables: {
						firebaseUserLoginInput: {
							firebaseToken: firebaseToken,
						},
					},
				});
				console.log("registerResult", registerResult);
				console.log("secondLoginResult", secondLoginResult);
				await localStorage.setItem(
					JWT_TOKEN,
					secondLoginResult.data?.firebaseUserLogin.token as string
				);
				await getUserInfo();
				return history.push(successUrl);
			}
		} catch (error) {
			setIsLoading(false);
			alert(`Server error. ${JSON.stringify(error)}`);
			signOut();
		}
	}

	// email and password
	async function handleCreateUserWithEmailAndPassword(
		_auth: Auth,
		_email: string,
		_password: string
	) {
		try {
			// update auth
			_auth = getAuth(firebaseAppWithConfig);
			const userCredential = await createUserWithEmailAndPassword(
				_auth,
				_email,
				_password
			);
			const firebaseToken = await getIdToken(userCredential.user, true);
			console.log("firebaseToken", firebaseToken);
			alert(`SignUp ${userCredential.user.email}`);
			await handleSignInSuccess(firebaseToken);
		} catch (error) {
			console.log("error", JSON.stringify(error));
			alert("SignUp failed");
		}
	}

	async function handleSignInWithEmailAndPassword(
		_auth: Auth,
		_email: string,
		_password: string
	) {
		try {
			// update auth
			_auth = getAuth(firebaseAppWithConfig);
			const userCredential = await signInWithEmailAndPassword(
				_auth,
				_email,
				_password
			);
			const firebaseToken = await getIdToken(userCredential.user, true);
			console.log("firebaseToken", firebaseToken);
			alert(`SignIn ${userCredential.user.email}`);
			await handleSignInSuccess(firebaseToken);
		} catch (error) {
			console.log("error", JSON.stringify(error));
			alert("SignIn failed");
		}
	}

	// magiclink
	async function handleSendSignInLinkToEmail(_auth: Auth, _email: string) {
		try {
			// update auth
			_auth = getAuth(firebaseAppWithConfig);
			const actionCodeSettings = {
				url: `${domainNameGenerator()}/login`,
				// no need to setup if not building IOS or Andriod app
				// iOS: {
				//    bundleId: 'com.example.ios'
				// },
				// android: {
				//   packageName: 'com.example.android',
				//   installApp: true,
				//   minimumVersion: '12'
				// },
				handleCodeInApp: true,
			};
			await sendSignInLinkToEmail(_auth, _email, actionCodeSettings);
			window.localStorage.setItem("emailForSignIn", email);
			alert(`SignIn Link Sent to ${_email}`);
		} catch (error) {
			console.log("error", JSON.stringify(error));
			alert("SignIn failed");
		}
	}

	async function handleSignInWithEmailLink(_auth: Auth, url: string) {
		try {
			if (isSignInWithEmailLink(_auth, url)) {
				setIsLoading(true);
				let email = window.localStorage.getItem("emailForSignIn");
				if (!email) {
					// User opened the link on a different device. To prevent session fixation
					// attacks, ask the user to provide the associated email again. For example:
					email = window.prompt(
						"Please provide your email for confirmation"
					);
				}
				if (email) {
					const userCredential = await signInWithEmailLink(
						_auth,
						email,
						url
					);
					console.log("userCredential", userCredential);
					window.localStorage.removeItem("emailForSignIn");
					const firebaseToken = await getIdToken(
						userCredential.user,
						true
					);
					console.log("firebaseToken", firebaseToken);
					alert(`SignIn with MagicLink ${email}`);
					await handleSignInSuccess(firebaseToken);
				}
				setIsLoading(false);
			}
		} catch (error) {
			console.log("error", JSON.stringify(error));
			alert("SignIn failed");
		}
	}

	// sso provider
	async function handleSignInwithPopup(
		_auth: Auth,
		firebaseProvider: FirebaseProvider
	) {
		// https://firebase.google.com/docs/auth/web/facebook-login
		try {
			let authProvider:
				| GoogleAuthProvider
				| FacebookAuthProvider
				| OAuthProvider
				| null = null;
			switch (firebaseProvider) {
				case FirebaseProvider.GOOGLE:
					authProvider = new GoogleAuthProvider();
					// authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
					authProvider.setCustomParameters({
						prompt: "select_account",
					});
					break;
				case FirebaseProvider.FACEBOOK:
					authProvider = new FacebookAuthProvider();
					break;
				case FirebaseProvider.APPLE:
					authProvider = new OAuthProvider("apple.com");
					break;
				default:
					break;
			}
			if (!authProvider) return alert("SignIn failed. No Provider.");
			const result = await signInWithPopup(_auth, authProvider);
			setIsLoading(true);
			console.log(JSON.stringify(result));
			let credential: OAuthCredential | null = null;
			// console.log("_provider", _provider)
			switch (firebaseProvider) {
				case FirebaseProvider.GOOGLE:
					credential =
						GoogleAuthProvider.credentialFromResult(result);
					break;
				case FirebaseProvider.FACEBOOK:
					credential =
						FacebookAuthProvider.credentialFromResult(result);
					break;
				case FirebaseProvider.APPLE:
					credential = OAuthProvider.credentialFromResult(result);
					break;
				default:
					break;
			}
			if (!credential) return alert("SignIn failed. No Credential.");
			console.log("signin complete, wait auth");
		} catch (error) {
			console.log("error", JSON.stringify(error));
			alert("SignIn failed");
		}
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (auth) {
			handleSignInWithEmailLink(auth, window.location.href);
		}
		// eslint-disable-next-line
	}, [auth]);
	useEffect(() => {
		if (auth.currentUser) {
			handleAuthGetCurrentUser(auth.currentUser);
		}
	}, [auth.currentUser]);
	if (isLoading) {
		return <div>Signing In / Up...</div>;
	}
	return (
		<div>
			Email:{" "}
			<input
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
			/>
			<br />
			Password:{" "}
			<input
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
			<br />
			<button
				onClick={() =>
					handleCreateUserWithEmailAndPassword(auth, email, password)
				}
			>
				SignUp
			</button>
			<button
				onClick={() =>
					handleSignInWithEmailAndPassword(auth, email, password)
				}
			>
				SignIn
			</button>
			<button onClick={() => handleSendSignInLinkToEmail(auth, email)}>
				MagicLink (No need password)
			</button>
			<br />
			<br />
			<br />
			SSO SignIn
			<br />
			<button
				onClick={() =>
					handleSignInwithPopup(auth, FirebaseProvider.GOOGLE)
				}
			>
				Google
			</button>
			<button
				onClick={() =>
					handleSignInwithPopup(auth, FirebaseProvider.FACEBOOK)
				}
			>
				Facebook
			</button>
			<button
				onClick={() =>
					handleSignInwithPopup(auth, FirebaseProvider.APPLE)
				}
			>
				Apple
			</button>
		</div>
	);
}

export default Login;
