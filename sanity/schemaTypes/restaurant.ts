import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Reataurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: ' latitude of the Reataurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: ' Longtitude of the Reataurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1 to 5) stars',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('please enter a value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) =>Rule.required(),
      to:[{type:"category"}]
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'dish',
      of:[{type:"reference",to:[{type:"dish"}] }],
    }),
 ]
})
