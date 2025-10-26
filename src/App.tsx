import React, { useState } from 'react';
import { useCoins } from './hooks/useCoins';
import SearchBar from './components/SearchBar';
import CoinTable from './components/CoinTable';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { data, isLoading, isError } = useCoins();
  const [query, setQuery] = useState('');

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Failed to load data.</div>;

  const filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
          <ThemeToggle />
        </div>
        <SearchBar value={query} onChange={setQuery} />
        {filteredCoins && <CoinTable coins={filteredCoins} />}
      </div>
    </div>
  );
}

export default App;
