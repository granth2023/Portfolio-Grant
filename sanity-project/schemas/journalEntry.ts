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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title', // Adding the title field
      title: 'Entry Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(1).max(100),  // Adjust constraints as needed
    },
    {
      name: 'content',
      title: 'Entry Content',
      type: 'text',
      validation: (Rule: any) => Rule.required().min(5).max(20000),
    },
    { 
      name: 'image',
      title: 'Entry Image',
      type: 'image',
      options: {
        hotspot: true
      }, 
      validation: (Rule: any) => Rule.optional(),
    }
    
  ],
};

export default journalEntry;
