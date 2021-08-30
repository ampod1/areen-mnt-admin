import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import { useMemo } from 'react';

let apolloClient: any;
const headers = {
	'content-type': 'application/json',
	'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
};

function createApolloClient() {
	return new ApolloClient({
		link: new HttpLink({
			uri: 'https://caring-labrador-34.hasura.app/v1/graphql',
			headers,
		}),
		cache: new InMemoryCache(),
		defaultOptions: {
			query: { fetchPolicy: 'network-only' },
		},
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		const data = merge(initialState!, existingCache);

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export const client = createApolloClient();
