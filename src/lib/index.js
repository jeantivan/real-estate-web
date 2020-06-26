import { PrismicClient } from "../prismic-config";
import Prismic from "prismic-javascript";

const Client = PrismicClient();

export async function getAllInmuebles(page = 1) {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "inmueble"),
    {
      orderings: "[my.inmueble.date desc]",
      pageSize: 6,
      page,
    }
  );

  return response;
}

export async function getAllInmueblesSlug() {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "inmueble"),
    { orderings: "[my.inmueble.date desc]" }
  );

  const paths = response.results.map(({ uid }) => ({ params: { slug: uid } }));

  return paths;
}

export async function getInmueble(slug) {
  const document = await Client.getByUID("inmueble", slug, {
    fetchLinks: [
      "agent.name",
      "agent.email",
      "agent.phonenumber",
      "agent.picture",
    ],
  });

  const masInmuebles = await Client.query(
    Prismic.Predicates.similar(document.id, 3),
    { pageSize: 3 }
  );

  return { document, masInmuebles };
}

export async function getAllAgents() {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "agent")
  );

  console.log(response);
  return response;
}
