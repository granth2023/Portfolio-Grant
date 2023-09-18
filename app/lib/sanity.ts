import { createClient } from "next-sanity";

const projectId = "l2g5gn2p";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: 'skRBtWYE3USeZHfkT00uoWoS9yOVC35mM9ozcHalPqTQkvAV2N4CRh2FnlZ3oksMnHMaHQie3jFhUkC5BYQqf2mugnhf496kMxRkWlBiw7CSqwK6wu0olYXn6di6PNxB8IO47x9y2pKd24s6PtD8NwW8MmdC4NJalQRrtfRAqwiWh3r7La6t'
});