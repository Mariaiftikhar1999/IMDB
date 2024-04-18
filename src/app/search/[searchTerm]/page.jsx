import Results from "@/app/components/Results";
export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=fa7a5d95339c828e8fb9ef9bd452b6e6&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results  results={results}/> }
    </div>
  );
}
