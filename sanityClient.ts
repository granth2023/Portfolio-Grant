// sanityClient.ts

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'l2g5gn2p', 
  dataset: 'production',
  useCdn: false, 
  token: process.env.SANITY_API_TOKEN
});

export default client;


export const createJournalEntry = async (entry: { title: string; content: string }) => {
  try {
      return await client.create({
          _type: 'journalEntry',
          title: entry.title,
          content: entry.content,  // corrected field name
          date: new Date().toISOString()
      });
  } catch (error) {
      console.error("Error in createJournalEntry:", error);
      throw error;  // re-throw the error so it can be caught by calling function
  }
};

  