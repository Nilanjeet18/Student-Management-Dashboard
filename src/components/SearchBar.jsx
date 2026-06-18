function SearchBar({ setSearch }) 
{
  return (
    <input
      className="w-full p-2 mb-4 border rounded"
      placeholder="Search student..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
