export default {
  name: 'admission',
  title: 'Admission Updates',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'session',
      title: 'Academic Session (e.g. 2025-26)',
      type: 'string',
    },
    {
      name: 'isOpen',
      title: 'Admissions Currently Open?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'lastDate',
      title: 'Last Date to Apply',
      type: 'date',
    },
    {
      name: 'details',
      title: 'Details / Description',
      type: 'text',
    },
    {
      name: 'programs',
      title: 'Programs Available',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}