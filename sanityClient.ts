// sanityClient.ts

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'l2g5gn2p', 
  dataset: 'production',
  useCdn: false
});

export default client;


export const createJournalEntry = async (entry: { title: string; content: string }) => {
    return client.create({
      _type: 'journalEntry',
      title: entry.title,
      text: entry.content,
      date: new Date().toISOString()
    });
  };
  