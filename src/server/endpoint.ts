import { GraphQLClient } from "graphql-request";

export const mainEndpoint = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || ""
);
