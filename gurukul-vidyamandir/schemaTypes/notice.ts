export default {
  name: 'notice',
  title: 'Notices & Announcements',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Admission', value: 'admission' },
          { title: 'Exam', value: 'exam' },
          { title: 'Result', value: 'result' },
          { title: 'Holiday', value: 'holiday' },
          { title: 'General', value: 'general' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'important',
      title: 'Mark as Important?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
}