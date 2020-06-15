import Prismic from "prismic-javascript";

export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_ENPOINT = process.env.PRISMIC_API_ENDPOINT;

// Client method to query documents from the Prismic repo
export const PrismicClient = (req = null) =>
  Prismic.client(API_ENPOINT, createClientOptions(req, API_TOKEN));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
