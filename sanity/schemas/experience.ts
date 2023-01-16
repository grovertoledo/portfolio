import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job title',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date started',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date ended',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentWork',
      title: 'Is currently working here',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
