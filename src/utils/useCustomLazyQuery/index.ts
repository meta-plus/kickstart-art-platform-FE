import { DocumentNode, OperationVariables, useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

  
export function useCustomLazyQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode) {
    // const client = useApolloClient();
    // client.setLink(from([authMiddleware, httpLink]))
    const client = useApolloClient();
    return useCallback(
        (variables: TVariables) =>
            client.query<TData, TVariables>({
                query: query,
                variables: variables,
                fetchPolicy:'network-only',
            }),
        [client]
    );
}