export default {
  name: 'resultBanner',
  title: 'Result Banners (Year-wise)',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. 2025, 2024',
    },
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      description: 'e.g. "JEE/NEET Results 2025"',
    },
    {
      name: 'bannerImages',
      title: 'Result Banner Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Upload result banners created by school for this year',
    },
  ],
  orderings: [
    {
      title: 'Year (Newest)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'bannerImages.0',
    },
  },
}
