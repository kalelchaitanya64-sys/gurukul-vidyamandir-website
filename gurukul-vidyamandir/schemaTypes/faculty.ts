export default {
  name: 'faculty',
  title: 'Faculty Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
    },
    {
      name: 'subjects',
      title: 'Subjects Taught',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'experience',
      title: 'Experience (e.g. 9+ Years)',
      type: 'string',
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
    },
    {
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram Profile URL',
      type: 'url',
    },
    {
      name: 'photo',
      title: 'Faculty Photo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}