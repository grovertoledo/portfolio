import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import type { Experience } from "../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`

export const fetchExperiences = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  // const data = await res.json();

  // const experiences: Experience[] =data.experiences;
  // console.log('fetching', experiences);
  const res = await sanityClient.fetch(query) as Experience[]; 
  return res;
}