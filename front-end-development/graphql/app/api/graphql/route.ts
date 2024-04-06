import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";

import prisma from "@/prisma/db";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req,
    res,
    prisma,
  }),
});

export { handler as GET, handler as POST };
