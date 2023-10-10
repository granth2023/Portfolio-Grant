"use client"

import Head from 'next/head';
import sanityClient from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import React, { useState, useEffect } from 'react';

interface JournalEntry {
  _id: string;
  title: string;
  content: string;
  date: string;
  image?: { asset: { _ref: string } }; // Reference structure for Sanity images
}

// Set up the imageUrlBuilder
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
    return builder.image(source);
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
        image
      }`;

      const fetchedEntries: JournalEntry[] = await sanityClient.fetch(query);

      // Fetch the actual image from Sanity
      fetchedEntries.forEach(entry => {
        if (entry.image) {
          entry.image.asset._ref = urlFor(entry.image.asset).url();
        }
      });

      setEntries(fetchedEntries || []);
    }

    fetchEntries();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-6">
      <Head>
        <title>Live Journal - Grant Harris</title>
      </Head>

      <section className="mt-10">
        {entries && entries.map((entry: JournalEntry) => (
          <div key={entry._id} className="mb-6 p-4 rounded shadow bg-white" style={{ color: 'black', backgroundColor: 'white' }}>
            
            {entry.image && <img src={urlFor(entry.image.asset).url()} alt={entry.title} className="rounded mb-4" />}
            
            <p className="text-black">
              {entry.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <small className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</small>
          </div>
        ))} 
      </section>
    </div>
  );
}

export default LiveJournal;
