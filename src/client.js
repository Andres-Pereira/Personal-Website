import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2025-01-30',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
});

//para imagenes
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);