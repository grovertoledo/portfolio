import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import type { Project } from "../typings";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`

export const fetchProjects = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  // const data = await res.json();

  // const projects: Project[] =data.projects;
  // console.log('fetching', projects);  
  const res = await sanityClient.fetch(query) as Project[];
  return res;
}