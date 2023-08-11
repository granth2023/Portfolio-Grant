import { createClient } from "next-sanity";

const projectId = "l2g5gn2p";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});