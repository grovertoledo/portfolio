import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import type { Social } from "../typings";

const query = groq`
  *[_type == "social"]
`

export const fetchSocials = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  // const data = await res.json();

  // const socials: Social[] =data.socials;
  // console.log('fetching', socials);  
  const res = await sanityClient.fetch(query) as Social[];
  return res;
}