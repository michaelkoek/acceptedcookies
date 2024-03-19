import { mainEndpoint } from "../endpoint";

export interface IPortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  endDate: string;
  startingDate: string;
  taskSummary: string;
  tools: string;
  jobPosition: string;
  companyLogo?: {
    url: string;
    id: string;
  };
}

export interface IPortfolioItems {
  portfolios: IPortfolioItem[];
}

export const getPortfolios = async (lastId?: string) => {
  const passedLastId = lastId ? `"${lastId}"` : null;
  const data: IPortfolioItems = await mainEndpoint.request(
    `query GetPortfolios {
          portfolios(orderBy: startingDate_DESC first: 3 after: ${passedLastId}) {
            id
            slug
            title
            description
            endDate
            startingDate
            taskSummary
            tools
            jobPosition
            companyLogo {
              id
              url
            }
          }
       }`,
  );
  return data;
};
