import {
	createHttpLink,
	ApolloLink,
	ApolloClient,
	from,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";
import { ElementType } from "react";
import { JWT_TOKEN } from "../../assets/data/data";


const httpLink = createHttpLink({
	// uri: "https://fantasktic-test.herokuapp.com/graphql"
	uri:
		process.env.NODE_ENV === "production"
			? process.env.REACT_APP_BACKEND_PRODUCTION_SERVER_URL
			: process.env.REACT_APP_BACKEND_TEST_SERVER_URL,
});
const authMiddleware = new ApolloLink((operation, forward) => {
	const customHeaders = operation.getContext().hasOwnProperty("headers")
		? operation.getContext().headers
		: {};
	const jwtToken = localStorage.getItem(JWT_TOKEN);
	operation.setContext({
		headers: {
			...customHeaders,
			//we can also set the authorization header
			authorization: `Bearer ${jwtToken}`,
		},
	});
	return forward(operation);
});

const aplloClient = new ApolloClient({
	link: from([authMiddleware, httpLink]),
	cache: new InMemoryCache({
		// addTypename:false
	}),
});

export const WithApolloGQLContext = (Component: ElementType) => {
	return function WithApolloGQLContext(props: any) {
		return (
			<ApolloProvider client={aplloClient}>
				<Component {...props}/>
			</ApolloProvider>
		);
	};
};