// import Head from 'next/head';
// import sanityClient from '../../sanityClient';
// import React, { useState, useEffect } from 'react';

// interface JournalEntry {
//   _id: string;
//   title: string;
//   content: string;
//   date: string;
// }

// function LiveJournal() {
//   const [entries, setEntries] = useState<JournalEntry[]>([]);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       const query = `*[_type == "journalEntry"] | order(date desc) {
//         _id,
//         title,
//         content,
//         date,
//       }`;

//       const fetchedEntries: JournalEntry[] = await sanityClient.fetch(query);
//       setEntries(fetchedEntries || []);
//     }

//     fetchEntries();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 mt-6">
//       <Head>
//         <title>Live Journal - Grant Harris</title>
//       </Head>
//       <h1 className="text-3xl mb-6 font-bold text-center text-gray-700">Live Journal</h1>
//       <section className="mt-10">
//         {entries && entries.map((entry: JournalEntry) => (
//           <div key={entry._id} className="mb-6 p-4 rounded shadow bg-white" style={{ color: 'black', backgroundColor: 'white' }}>
//             <p className="text-black">{entry.content}</p>
//             <small className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</small>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default LiveJournal;
