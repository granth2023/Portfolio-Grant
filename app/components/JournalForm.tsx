"use client";

import React, { useState } from 'react';
import { createJournalEntry } from '../../sanityClient';

interface JournalEntry {
  title: string;
  content: string;
  date: string; // Adding date property
}

const JournalForm: React.FC = () => {
  const [entry, setEntry] = useState<JournalEntry>({ title: '', content: '', date: '' }); // Initialize date in the state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEntry(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createJournalEntry(entry);
      setEntry({ title: '', content: '', date: '' }); // Reset date as well after submission
    } catch (error) {
      console.error("Error creating journal entry:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="datetime-local"  // Input type for date and time
          name="date"
          value={entry.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={entry.title}
          onChange={handleChange}
          style={{ color: 'black' }}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={entry.content}
          rows={5}
          onChange={handleChange}
          className="text-black"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default JournalForm;
