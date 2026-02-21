export default {
  name: 'result',
  title: 'Results & Toppers',
  type: 'document',
  fields: [
    {
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'exam',
      title: 'Exam Name',
      type: 'string',
      options: {
        list: [
          { title: 'IIT JEE Mains', value: 'IIT JEE Mains' },
          { title: 'IIT JEE Advanced', value: 'IIT JEE Advanced' },
          { title: 'NEET UG', value: 'NEET UG' },
          { title: 'SSC Board (Std 10)', value: 'SSC Board' },
          { title: 'HSC Board (Std 12)', value: 'HSC Board' },
        ],
      },
    },
    {
      name: 'score',
      title: 'Score / Percentile / Rank',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'stream',
      title: 'Stream',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'Engineering' },
          { title: 'Medical', value: 'Medical' },
          { title: 'General', value: 'General' },
        ],
      },
    },
    {
      name: 'photo',
      title: 'Student Photo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}