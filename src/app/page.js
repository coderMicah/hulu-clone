//react imports
import { headers } from "next/headers";

//components
import Results from "@/components/Results";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

//utilis
import requests from "@/utilis/requests";

async function getData(genre) {
  const g = genre === undefined ? "fetchTrending" : genre;
  const res = await fetch(`https://api.themoviedb.org/3${requests[g]?.url}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Home(context) {
  const { searchParams } = context;
  const { genre } = searchParams;
  // const genre =
  //   (searchParams === Object.keys(searchParams).length == 0)
  //     ? "fetchTrending"
  //     : searchParams.genre;

  const { results } = await getData(genre);

  return (
    <main className="">
      <Header />
      <Nav />
      <Results results={results}/>
    </main>
  );
}
