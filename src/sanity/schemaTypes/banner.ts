import { defineType } from 'sanity'

export default defineType({
  name: 'banner',  // Banner ka naam
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
})
