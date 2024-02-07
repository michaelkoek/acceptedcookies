import { mainEndpoint } from "../endpoint";

export const getPortfolios = async () => {
    const data = await mainEndpoint.request(
        `query GetPortfolios {
           portfolios {
             id
             slug
             title
             description
           }
       }`
    );

    return data;
};
