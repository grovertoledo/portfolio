import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import type { Technology } from "../typings";

const query = groq`
  *[_type == "technology"]
`

export const fetchTechnologies = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTechnologies`);
  // const data = await res.json();

  // const Technologies: Technology[] = data.technologies;
  // console.log('fetching', Technologies);  
  const res = await sanityClient.fetch(query) as Technology[];
  return res;
}