import Head from 'next/head';
import sanityClient from '../../sanityClient';
import JournalForm from '../components/JournalForm';
import React, { useState, useEffect } from 'react';

interface JournalEntry {
  _id: string;
  title: string;
  content: string;
  date: string;
}

function LiveJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const query = `*[_type == "journalEntry"] | order(date desc) {
        _id,
        title,
        content,
        date,
      }`;

      const fetchedEntries: JournalEntry[] = await sanityClient.fetch(query);
      setEntries(fetchedEntries || []);
    }

    fetchEntries();
  }, []);

  return {
    entries: entries || []
  };
}

export default LiveJournal ;
 