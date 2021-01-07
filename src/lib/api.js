<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { PrismicClient } from "../prismic-config";
import Prismic from "prismic-javascript";

const Client = PrismicClient();

export async function getAllInmuebles({ page = 1, agent, orderBy, estado }) {
  let orderings;
  let filters = [Prismic.Predicates.at("document.type", "inmueble")];

  if (agent) {
    filters.push(Prismic.Predicates.at("my.inmueble.agent", agent));
  }

  if (estado) filters.push(Prismic.Predicates.at("my.inmueble.estado", estado));

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
    Prismic.Predicates.similar(document.id, 10),
    { pageSize: 3, fetchLinks: ["agent.name", "agent.picture"] }
  );

  return { document, masInmuebles };
}

export async function getAllAgents() {
  const response = await Client.query(
    Prismic.Predicates.at("document.type", "agent")
  );

  return response;
}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { PrismicClient } from "../prismic-config";
import Prismic from "prismic-javascript";

const Client = PrismicClient();

export async function getAllInmuebles({ page = 1, agent, orderBy, estado }) {
  let orderings;
  let filters = [Prismic.Predicates.at("document.type", "inmueble")];

  if (agent) {
    filters.push(Prismic.Predicates.at("my.inmueble.agent", agent));
  }

  if (estado) filters.push(Prismic.Predicates.at("my.inmueble.estado", estado));

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

  return response;
}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
