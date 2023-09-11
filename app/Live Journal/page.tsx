import Head from 'next/head';
import sanityClient  from '../../sanityClient';
import JournalForm from '../components/JournalForm';

// Define the type for an entry
interface JournalEntry {
    _id: string;
    text: string;
    date: string;
}

interface LiveJournalProps {
    entries: JournalEntry[];
}

export default function LiveJournal({ entries }: LiveJournalProps) {
    return (
        <div className="container mx-auto px-4 mt-6">
            <Head>
                <title>Live Journal - Grant Harris</title>
            </Head>
            
            <h1 className="text-3xl mb-6">Live Journal</h1>
            <JournalForm />
            
            <section className="mt-10">
                {entries.map((entry: JournalEntry) => (
                    <div key={entry._id} className="mb-4">
                        <p>{entry.text}</p>
                        <small>{new Date(entry.date).toLocaleDateString()}</small>
                    </div>
                ))}
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    const query = `*[_type == "journalEntry"] | order(date desc) {
        _id,
        text,
        date,
    }`;

    const entries: JournalEntry[] = await sanityClient.fetch(query);

    return {
        props: {
            entries
        }
    };
}
