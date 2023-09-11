// Removed the DocumentType import since it's not used anymore.
// If later you find a relevant type or create your own type, you can reintroduce it.

export const journalEntry = {
    name: 'journalEntry',
    title: 'Journal Entry',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15,
          calendarTodayLabel: 'Today'
        },
        // Explicitly set the type of Rule as any to avoid the implicit 'any' type warning
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'text',
        title: 'Entry Text',
        type: 'text',
        // Explicitly set the type of Rule as any here as well
        validation: (Rule: any) => Rule.required().min(5).max(2000),  // Adjust constraints as needed
      },
    ],
  };
  
  export default journalEntry;
  