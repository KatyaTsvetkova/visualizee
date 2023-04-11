
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
  //projectId: `${process.env.REACT_APP_SANITY_PROJECT_ID}`,
  projectId: 'q7ckoh0k',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  //token: `${process.env.REACT_APP_SANITY_TOKEN}`,
  token: 'skLA0a0MPP2Dj3b78mFIqPVS6mDovUJQH3ZkLtCGLhiGkJDF0wA2QwlqcXIFVF4GIjT0o2P3LC9TnAPi4PqO4Gyw4inr7VppAssBYiLyOdv2ZVnBW7vZdSAWEhX3JDxM4b6WBO7N79gbLOd4pQ47uKJF79QJgU0DuJ5qtJNvVe7Q58TjMYhH'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);