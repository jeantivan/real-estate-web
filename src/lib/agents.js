import { agents } from "../data/agents";

export function getAgents() {
  return agents;
}

export function getAgentById(id) {
  return agents.find((agent) => agent.id === id);
}
