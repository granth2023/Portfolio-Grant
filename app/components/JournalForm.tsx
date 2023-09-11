import React, { useState } from 'react';
import { createJournalEntry } from '../../sanityClient';  // Make sure you update this import to point to your actual Sanity.io setup

interface JournalEntry {
    title: string;
    content: string;
}

const JournalForm: React.FC = () => {
    const [entry, setEntry] = useState<JournalEntry>({ title: '', content: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEntry(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createJournalEntry(entry);
            // After a successful submission, you might want to clear the form
            setEntry({ title: '', content: '' });
        } catch (error) {
            console.error("Error creating journal entry:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={entry.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    name="content"
                    value={entry.content}
                    rows={5}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}



export default JournalForm;
