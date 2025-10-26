import React, { useState } from 'react';
import type { Coin } from '../hooks/useCoins';

interface Props {
  coins: Coin[];
}

type SortField = 'price' | 'market_cap' | 'change';

const CoinTable: React.FC<Props> = ({ coins }) => {
  const [sortField, setSortField] = useState<SortField>('market_cap');
  const [ascending, setAscending] = useState(false);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle ascending/descending if clicking same field again
      setAscending(!ascending);
    } else {
      // Switch to a new field, default descending
      setSortField(field);
      setAscending(false);
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return ascending ? '↑' : '↓';
  };

  const sortedCoins = [...coins].sort((a, b) => {
    const getValue = (coin: Coin) => {
      if (sortField === 'price') return coin.current_price;
      if (sortField === 'market_cap') return coin.market_cap;
      return coin.price_change_percentage_24h;
    };

    return ascending ? getValue(a) - getValue(b) : getValue(b) - getValue(a);
  });

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="text-left bg-gray-100 dark:bg-gray-700">
            <th className="p-3">Coin</th>
            <th
              className="p-3 cursor-pointer select-none"
              onClick={() => handleSort('price')}
            >
              Price ($) {getSortIcon('price')}
            </th>
            <th
              className="p-3 cursor-pointer select-none"
              onClick={() => handleSort('market_cap')}
            >
              Market Cap {getSortIcon('market_cap')}
            </th>
            <th
              className="p-3 cursor-pointer select-none"
              onClick={() => handleSort('change')}
            >
              24h Change {getSortIcon('change')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCoins.map((coin) => (
            <tr
              key={coin.id}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="p-3 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td className="p-3">${coin.current_price.toLocaleString()}</td>
              <td className="p-3">${coin.market_cap.toLocaleString()}</td>
              <td
                className={`p-3 ${
                  coin.price_change_percentage_24h > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
