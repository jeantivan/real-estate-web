import Client from "@/utils/prismic-config";
import * as prismic from "@prismicio/client";

const pageSize = 9;

// Obtiene la data de todos los inmuebles guardados en el repositorio Prismic
export function getAllInmuebles({ page = 1 }) {
  return Client.getByType("inmueble", {
    pageSize,
    page,
  });
}

export async function getInmueblesByPage(page = 1) {
  const response = await Client.getByType("inmueble", {
    page,
    pageSize,
  });

  return response;
}

export async function getAllInmueblesPages() {
  const response = Client.getByType("inmueble", {
    pageSize,
  });

  return response;
}

// Obtiene los slugs de todos los inmuebles guardados en el repositorio Prismic
export async function getAllInmueblesSlug() {
  return await Client.getByType("inmueble", {
    orderings: {
      field: "my.inmueble.date",
      direction: "desc",
    },
  });
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
  const response = await Client.query(prismic.predicate.similar(id, 10), {
    pageSize: 4,
  });

  return response;
}

// Obtiene la informacion de todos los agentes
export async function getAllAgents() {
  return await Client.getByType("agent");
}

// Obtiene todos los asociados a cada Agente
export async function getAllInmueblesByAgent(agentUid) {
  const agent = await Client.getByUID("agent", agentUid);

  const inmuebles = await Client.getByType("inmueble", {
    predicates: [prismic.predicate.at("my.inmueble.agent", agent.id)],
  });

  return { agent, inmuebles };
}
