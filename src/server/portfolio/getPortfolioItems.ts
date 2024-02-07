import { mainEndpoint } from "../endpoint";

export const getPortfolioItems = async (slug: string) => {
    const data = await mainEndpoint.request(
        `query GetPortfolios {
          portfolio(where: {slug: "${slug}"}) {
          id
          slug
          title
          description
        }
      }`
    );

    return data;
};
