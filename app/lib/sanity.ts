import { createClient } from "next-sanity";

const projectId = "l2g5gn2p";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: 'skC1Fl8uLKxHuMKRNL6nr7dkZONJQswgVdmbXf5lQNAarGbAHEtsHRp2Nrcjl6ZrKBq0W7p25vLADqazO1KYUGcxOZXa1yk0iqPfaBbQxOqWoS0AuzWHdnm1fK1XwfdiMBmYm4wGMOJTOb2afcv0KXWku3I3i5nlo85lDQ3vniSPOZBWFd1Z'
});