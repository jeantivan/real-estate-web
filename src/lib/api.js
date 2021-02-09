import { PrismicClient } from "@/utils/prismic-config";
import Prismic from "prismic-javascript";

const Client = PrismicClient();

const { at, similar } = Prismic.Predicates;

// Obtiene la data de todos los inmuebles guardados en el repositorio Prismic
export async function getAllInmuebles({ page = 1, agent, orderBy, estado }) {
  let orderings;
  let filters = [at("document.type", "inmueble")];

  if (agent) {
    filters.push(at("my.inmueble.agent", agent));
  }

  if (estado) filters.push(at("my.inmueble.estado", estado));

  if (orderBy) {
    switch (orderBy) {
      case "pmax":
        orderings = "[my.inmueble.precio desc]";
        break;
      case "pmin":
        orderings = "[my.inmueble.precio]";
        break;
      default:
        orderings = "[document.date desc]";
        break;
    }
  }

  const response = await Client.query(filters, {
    fetchLinks: ["agent.name", "agent.picture"],
    orderings: orderings,
    pageSize: 6,
    page,
  });

  return response;
}

// Obtiene los slugs de todos los inmuebles guardados en el repositorio Prismic
export async function getAllInmueblesSlug() {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "inmueble"),
    { orderings: "[my.inmueble.date desc]" }
  );

  const paths = response.results.map(({ uid }) => ({ params: { slug: uid } }));

  return paths;
}

// Obtiene la data del inmueble dado un slug
export async function getInmueble(slug) {
  const { id, uid, data } = await Client.getByUID("inmueble", slug, {
    fetchLinks: [
      "agent.name",
      "agent.email",
      "agent.phonenumber",
      "agent.picture",
    ],
  });

  return {
    id: id,
    slug: uid,
    ...data,
  };
}

// Obtiene los inmuebles con contenido similar a otro inmueble
export async function getInmueblesSimilares(id) {
  const { results } = await Client.query(similar(id, 10), { pageSize: 4 });
  return results;
}

// Obtiene la informacion de todos los agentes
export async function getAllAgents() {
  const response = await Client.query(at("document.type", "agent"));

  return response;
}
