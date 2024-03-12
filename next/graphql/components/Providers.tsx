"use client";
import { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.BASE_URL}/api/graphql`,

  cache: new InMemoryCache(),
});

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
