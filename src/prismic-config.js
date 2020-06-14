import Prismic from "prismic-javascript";

const REPOSITORY = process.env.NEXT_EXAMPLE_CMS_PRISMIC_REPOSITORY_NAME;
export const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_PRISMIC_API_TOKEN;
export const API_ENPOINT = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;

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
