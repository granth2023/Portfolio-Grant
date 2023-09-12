import Head from 'next/head';
import sanityClient from '../../sanityClient';
import JournalForm from '../components/JournalForm';

interface JournalEntry {
  _id: string;
  text: string;
  date: string;
}

interface LiveJournalProps {
  entries: JournalEntry[];
}

 function LiveJournal({ entries }: LiveJournalProps) {
  return (
    <div className="container mx-auto px-4 mt-6">
      <Head>
        <title>Live Journal - Grant Harris</title>
      </Head>
      <h1 className="text-3xl mb-6 font-bold text-center text-gray-700">Live Journal</h1>
      <JournalForm />
      <section className="mt-10">
        {entries && entries.map((entry: JournalEntry) => (
          <div key={entry._id} className="mb-6 p-4 rounded shadow bg-white" style={{ color: 'black', backgroundColor: 'white' }}>
            <p className="text-black">{entry.text}</p>
            <small className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</small>
          </div>
        ))}
      </section>
    </div>
  );
}

LiveJournal.getInitialProps = async () => {
  const query = `*[_type == "journalEntry"] | order(date desc) {
    _id,
    text,
    date,
  }`;

  const entries: JournalEntry[] = await sanityClient.fetch(query);

  return {
    entries: entries || []
  };
}

export { LiveJournal };
