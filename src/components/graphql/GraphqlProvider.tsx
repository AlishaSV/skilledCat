'use client';

import { PropsWithChildren, useState } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

type TGraphqlProviderProps = PropsWithChildren & {
  uri: string;
};

export function GraphqlProvider({ uri, children }: TGraphqlProviderProps) {
  const [client] = useState(() => {
    new HttpLink({ uri, credentials: 'include' });
    return new ApolloClient({
      uri,
      cache: new InMemoryCache(),
    });
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
