import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'Image',
      title: 'Image of category',
      type: 'image',
    }),
  ],
})
