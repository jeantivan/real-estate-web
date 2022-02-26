import Client from "@/utils/prismic-config";
import * as prismic  from '@prismicio/client'

// Obtiene la data de todos los inmuebles guardados en el repositorio Prismic
export async function getAllInmuebles({ page = 1, agent, orderBy, estado }) {
  
  let orderings;
  let filters = [];

  if (agent) {
    filters.push(prismic.predicate.at("my.inmueble.agent", agent));
  }

  if (estado) filters.push(prismic.predicate.at("my.inmueble.estado", estado));

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

  const response = await Client.getByType('inmueble',{
    predicates: filters,
    fetchLinks: ["agent.name", "agent.picture"],
    orderings: orderings,
    pageSize: 6,
    page,
  });

  return response;
}

// Obtiene los slugs de todos los inmuebles guardados en el repositorio Prismic
export async function getAllInmueblesSlug() {
  const response = await Client.getByType("inmueble",
    { orderings: {
      field: "my.inmueble.date", direction: "desc" }}
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
  const { results } = await Client.query(prismic.predicate.similar(id, 10), { pageSize: 4 });
  return results;
}

// Obtiene la informacion de todos los agentes
export async function getAllAgents() {
  return await Client.getByType("agent");
}
