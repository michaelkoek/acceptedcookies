import { mainEndpoint } from "../endpoint";

export const getPortfolioItem = async (slug: string) => {
    try {
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
    } catch (e) {
        console.error("getPortfolioItem", { e });
    }
};
