import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'featured Category Name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
        name:"short_description",
        type:"string",
        title:"Short description",
        validation:(Rule)=>Rule.max(200)
    })
    ,
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of:[{type:"reference" ,to:[{
        type:"restaurant"
      }]}]
    }),
  ],
})
