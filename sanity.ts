import  {createClient}   from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url"

const client =createClient({
    projectId:"qwoxusny",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21"
})
const builder=imageUrlBuilder(client)
export const urlFor=(source:any)=>builder.image(source)

export default client