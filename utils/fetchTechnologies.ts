import type { Technology } from "../typings";

export const fetchTechnologies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTechnologies`);
  const data = await res.json();

  const Technologies: Technology[] = data.technologies;
  console.log('fetching', Technologies);  

  return Technologies;
}